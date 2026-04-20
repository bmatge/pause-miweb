const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const QRCode = require('qrcode');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// Also serve the shared questions and styles files
app.use('/js', express.static(path.join(__dirname, '..', 'js')));
app.use('/css', express.static(path.join(__dirname, '..', 'css')));

// ═══════════════════════════════════════
// Game Rooms
// ═══════════════════════════════════════
const rooms = new Map();

function generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    // Ensure unique
    if (rooms.has(code)) return generateRoomCode();
    return code;
}

function createRoom() {
    const code = generateRoomCode();
    const room = {
        code,
        players: [],        // { id, name, score, answers }
        state: 'lobby',     // lobby | playing | results
        currentQuestion: null,
        questionIndex: 0,
        questions: [],
        answers: new Map(),  // socketId -> answer
        timer: null,
        timerEnd: null,
        categories: [],
        questionCount: 20
    };
    rooms.set(code, room);
    return room;
}

function getRoom(code) {
    return rooms.get(code?.toUpperCase());
}

// Clean up old rooms (>3h)
setInterval(() => {
    const now = Date.now();
    for (const [code, room] of rooms) {
        if (now - (room.createdAt || 0) > 3 * 60 * 60 * 1000) {
            rooms.delete(code);
        }
    }
}, 60 * 60 * 1000);

// ═══════════════════════════════════════
// Questions (loaded from shared file)
// ═══════════════════════════════════════
let QUESTIONS_DB = [];

// Load questions by evaluating the shared questions.js file
const fs = require('fs');
const questionsFile = fs.readFileSync(path.join(__dirname, '..', 'js', 'questions.js'), 'utf-8');
// Extract the array from the file (it defines `const QUESTIONS_DB = [...]`)
eval(questionsFile.replace('const ', 'global.'));
QUESTIONS_DB = global.QUESTIONS_DB;

// Assign stable IDs to questions (hash of question text — survives pool reorders)
const crypto = require('crypto');
QUESTIONS_DB.forEach((q) => {
    q._id = crypto.createHash('sha1').update(q.question).digest('hex').slice(0, 10);
});

// ═══════════════════════════════════════
// Per-category time limits (seconds)
// ═══════════════════════════════════════
const CATEGORY_TIME_LIMIT = {
    'casse-tete': 40
};
const DEFAULT_TIME_LIMIT = 20;
function getTimeLimit(category) {
    return CATEGORY_TIME_LIMIT[category] || DEFAULT_TIME_LIMIT;
}

// ═══════════════════════════════════════
// Used questions tracking (persists to disk)
// ═══════════════════════════════════════
const DATA_DIR = path.join(__dirname, '..', 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
const USED_FILE = path.join(DATA_DIR, 'used-questions.json');

function loadUsedQuestions() {
    try {
        return new Set(JSON.parse(fs.readFileSync(USED_FILE, 'utf-8')));
    } catch {
        return new Set();
    }
}

function saveUsedQuestions(usedSet) {
    fs.writeFileSync(USED_FILE, JSON.stringify([...usedSet]));
}

let usedQuestions = loadUsedQuestions();

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function selectQuestions(categories, count) {
    // Build a shuffled per-category pool, preferring unused questions
    function buildPools(skipUsedFilter) {
        const pools = {};
        for (const cat of categories) {
            let catPool = QUESTIONS_DB.filter(q => q.category === cat);
            if (!skipUsedFilter) {
                catPool = catPool.filter(q => !usedQuestions.has(q._id));
            }
            pools[cat] = shuffle(catPool);
        }
        return pools;
    }

    let pools = buildPools(false);
    const availableCount = Object.values(pools).reduce((s, a) => s + a.length, 0);

    // Not enough unused across all selected categories → reset tracker
    if (availableCount < count) {
        usedQuestions = new Set();
        saveUsedQuestions(usedQuestions);
        pools = buildPools(true);
    }

    // Round-robin across categories (shuffled category order for variety)
    const order = shuffle([...categories]);
    const selected = [];
    let madeProgress = true;
    while (selected.length < count && madeProgress) {
        madeProgress = false;
        for (const cat of order) {
            if (selected.length >= count) break;
            if (pools[cat].length > 0) {
                selected.push(pools[cat].shift());
                madeProgress = true;
            }
        }
    }

    // Mark as used
    selected.forEach(q => usedQuestions.add(q._id));
    saveUsedQuestions(usedQuestions);

    return selected;
}

// ═══════════════════════════════════════
// Answer checking (from game.js logic)
// ═══════════════════════════════════════
function normalize(str) {
    return str.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, ' ')
        .trim()
        .replace(/\s+/g, ' ');
}

function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = a[i - 1] === b[j - 1]
                ? dp[i - 1][j - 1]
                : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }
    return dp[m][n];
}

function checkAnswer(question, playerAnswer) {
    if (question.type === 'mcq') {
        return parseInt(playerAnswer) === question.answer;
    }
    if (question.type === 'yesno') {
        return playerAnswer === question.answer;
    }
    if (question.type === 'free') {
        const normInput = normalize(playerAnswer || '');
        return question.answers.some(ans => {
            const normAns = normalize(ans);
            const tolerance = Math.max(1, Math.floor(normAns.length * 0.25));
            return levenshtein(normInput, normAns) <= tolerance;
        });
    }
    return false;
}

function getPoints(type) {
    if (type === 'free') return 3;
    if (type === 'mcq') return 2;
    return 1;
}

// ═══════════════════════════════════════
// Socket.IO
// ═══════════════════════════════════════
io.on('connection', (socket) => {
    console.log(`Connected: ${socket.id}`);

    // HOST: Create room
    socket.on('host:create', async (data, callback) => {
        const room = createRoom();
        room.createdAt = Date.now();
        room.categories = data.categories || ['casse-tete', 'actualites', 'fakenews', 'celebrites', 'geek', 'science', 'histoire', 'trump', 'anime-disney'];
        room.questionCount = data.questionCount || 20;
        room.hostSocket = socket.id;

        socket.join(room.code);
        socket.roomCode = room.code;
        socket.isHost = true;

        // Generate QR code
        const joinUrl = `${BASE_URL}/player.html?room=${room.code}`;
        const qrDataUrl = await QRCode.toDataURL(joinUrl, { width: 300, margin: 2 });

        callback({ code: room.code, qr: qrDataUrl, joinUrl });
    });

    // PLAYER: Join room
    socket.on('player:join', (data, callback) => {
        const room = getRoom(data.roomCode);
        if (!room) return callback({ error: 'Room introuvable' });
        if (room.state !== 'lobby') return callback({ error: 'La partie a déjà commencé' });
        if (room.players.length >= 20) return callback({ error: 'Room pleine (max 20)' });

        const player = {
            id: socket.id,
            name: data.name.trim().slice(0, 20) || 'Anonyme',
            score: 0,
            correct: 0,
            total: 0
        };
        room.players.push(player);

        socket.join(room.code);
        socket.roomCode = room.code;
        socket.playerName = player.name;

        // Notify host
        io.to(room.code).emit('room:players', room.players);
        callback({ ok: true, playerCount: room.players.length });
    });

    // HOST: Start game
    socket.on('host:start', () => {
        const room = getRoom(socket.roomCode);
        if (!room || !socket.isHost) return;
        if (room.players.length === 0) return;

        room.state = 'playing';
        room.questions = selectQuestions(room.categories, room.questionCount);
        room.questionIndex = 0;

        io.to(room.code).emit('game:started');
        sendNextQuestion(room);
    });

    // PLAYER: Submit answer
    socket.on('player:answer', (data) => {
        const room = getRoom(socket.roomCode);
        if (!room || room.state !== 'playing') return;
        if (room.answers.has(socket.id)) return; // Already answered

        const timeLeft = room.timerEnd ? Math.max(0, room.timerEnd - Date.now()) : 0;
        room.answers.set(socket.id, {
            answer: data.answer,
            timeLeft
        });

        // Notify host of answer count
        io.to(room.code).emit('game:answer_count', {
            count: room.answers.size,
            total: room.players.length
        });

        // If all players answered, end question early
        if (room.answers.size >= room.players.length) {
            clearTimeout(room.timer);
            endQuestion(room);
        }
    });

    // HOST: Next question (manual advance)
    socket.on('host:next', () => {
        const room = getRoom(socket.roomCode);
        if (!room || !socket.isHost) return;
        sendNextQuestion(room);
    });

    // Disconnect
    socket.on('disconnect', () => {
        const room = getRoom(socket.roomCode);
        if (!room) return;

        if (socket.isHost) {
            // End the room
            io.to(room.code).emit('game:ended', { reason: 'host_left' });
            rooms.delete(room.code);
        } else {
            // Remove player
            room.players = room.players.filter(p => p.id !== socket.id);
            io.to(room.code).emit('room:players', room.players);
        }
    });
});

function sendNextQuestion(room) {
    if (room.questionIndex >= room.questions.length) {
        // Game over
        room.state = 'results';
        const rankings = [...room.players].sort((a, b) => b.score - a.score);
        io.to(room.code).emit('game:final_results', rankings);
        return;
    }

    const question = room.questions[room.questionIndex];
    room.currentQuestion = question;
    room.answers = new Map();

    const timeLimit = getTimeLimit(question.category);
    room.currentTimeLimitMs = timeLimit * 1000;

    // Send question to everyone (without answer)
    const questionData = {
        index: room.questionIndex + 1,
        total: room.questions.length,
        category: question.category,
        type: question.type,
        question: question.question,
        image: question.image || null,
        options: question.type === 'mcq' ? question.options : null,
        timeLimit
    };

    io.to(room.code).emit('game:question', questionData);

    // Start timer
    room.timerEnd = Date.now() + room.currentTimeLimitMs;
    room.timer = setTimeout(() => endQuestion(room), room.currentTimeLimitMs);
}

function endQuestion(room) {
    const question = room.currentQuestion;
    const results = [];

    for (const player of room.players) {
        const submission = room.answers.get(player.id);
        let correct = false;
        let bonus = 0;

        if (submission) {
            correct = checkAnswer(question, submission.answer);
            if (correct) {
                const basePoints = getPoints(question.type);
                // Speed bonus: up to 50% extra based on fraction of time left
                const totalMs = room.currentTimeLimitMs || 20000;
                bonus = Math.round(basePoints * (submission.timeLeft / totalMs) * 0.5);
                player.score += basePoints + bonus;
                player.correct++;
            }
            player.total++;
        } else {
            player.total++;
        }

        results.push({
            id: player.id,
            name: player.name,
            correct,
            score: player.score,
            answered: !!submission
        });
    }

    // Build correct answer text
    let correctAnswer = '';
    if (question.type === 'mcq') correctAnswer = question.options[question.answer];
    else if (question.type === 'yesno') correctAnswer = question.answer === 'oui' ? 'Vrai' : 'Faux';
    else if (question.type === 'free') correctAnswer = question.answers[0];

    room.questionIndex++;

    io.to(room.code).emit('game:question_results', {
        results,
        correctAnswer,
        explanation: question.explanation || null,
        standings: [...room.players].sort((a, b) => b.score - a.score)
    });
}

// ═══════════════════════════════════════
// Routes
// ═══════════════════════════════════════
// Solo mode (original game)
app.get('/solo.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`🧠 Pause Miweb Multiplayer running on ${BASE_URL}`);
});
