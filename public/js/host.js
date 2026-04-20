/**
 * Pause Miweb - Host Interface
 */
(function () {
    "use strict";

    const socket = io();
    let timerInterval = null;

    // ═══════════════════════════════════════
    // Screens
    // ═══════════════════════════════════════
    function showScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    }

    // ═══════════════════════════════════════
    // Setup Screen
    // ═══════════════════════════════════════
    let selectedCount = 20;

    document.querySelectorAll('.btn-count').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-count').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCount = parseInt(btn.dataset.count);
        });
    });

    document.getElementById('btn-create').addEventListener('click', () => {
        const categories = [...document.querySelectorAll('.category-toggle input:checked')]
            .map(cb => cb.value);

        if (categories.length === 0) {
            alert('Sélectionne au moins une catégorie !');
            return;
        }

        socket.emit('host:create', { categories, questionCount: selectedCount }, (data) => {
            document.getElementById('qr-code').src = data.qr;
            document.getElementById('room-code').textContent = data.code;
            document.getElementById('join-url').textContent = data.joinUrl;
            showScreen('screen-lobby');
        });
    });

    // ═══════════════════════════════════════
    // Lobby
    // ═══════════════════════════════════════
    const PLAYER_COLORS = [
        "#6c5ce7", "#e17055", "#00cec9", "#e84393",
        "#fdcb6e", "#00b894", "#0984e3", "#d63031",
        "#ff7675", "#74b9ff", "#55efc4", "#fab1a0"
    ];

    socket.on('room:players', (players) => {
        const list = document.getElementById('players-list');
        const count = document.getElementById('player-count');
        count.textContent = players.length;

        list.innerHTML = players.map((p, i) => `
            <div class="player-card" style="--player-color: ${PLAYER_COLORS[i % PLAYER_COLORS.length]}">
                <span class="player-avatar">${p.name[0].toUpperCase()}</span>
                <span class="player-name">${p.name}</span>
            </div>
        `).join('');

        const btn = document.getElementById('btn-start');
        if (players.length > 0) {
            btn.disabled = false;
            btn.textContent = `Lancer la partie (${players.length} joueur${players.length > 1 ? 's' : ''})`;
        } else {
            btn.disabled = true;
            btn.textContent = 'En attente de joueurs...';
        }
    });

    document.getElementById('btn-start').addEventListener('click', () => {
        socket.emit('host:start');
    });

    // ═══════════════════════════════════════
    // Game
    // ═══════════════════════════════════════
    const CATEGORY_LABELS = {
        'casse-tete': '🧩 Casse-tête',
        'actualites': '📰 Actualités',
        'fakenews': '🤥 Fake News',
        'celebrites': '⭐ Célébrités',
        'geek': '🎮 Geek',
        'science': '🔬 Science',
        'histoire': '📜 Histoire',
        'trump': '🍊 Trump'
    };

    socket.on('game:started', () => {
        showScreen('screen-game');
    });

    socket.on('game:question', (data) => {
        showScreen('screen-game');
        clearInterval(timerInterval);

        document.getElementById('round-counter').textContent = `Question ${data.index}/${data.total}`;
        document.getElementById('question-category').textContent = CATEGORY_LABELS[data.category] || data.category;
        document.getElementById('question-text').textContent = data.question;
        document.getElementById('answer-count').textContent = '0';
        document.getElementById('answer-total').textContent = document.getElementById('player-count')?.textContent || '?';

        // Image
        const imgContainer = document.getElementById('question-image-container');
        if (data.image) {
            document.getElementById('question-image').src = data.image;
            imgContainer.classList.remove('hidden');
        } else {
            imgContainer.classList.add('hidden');
        }

        // MCQ options (display only on host)
        const mcqEl = document.getElementById('mcq-options');
        if (data.type === 'mcq' && data.options) {
            mcqEl.innerHTML = data.options.map((opt, i) => `
                <div class="mcq-option"><span class="option-letter">${'ABCD'[i]}</span> ${opt}</div>
            `).join('');
            mcqEl.classList.remove('hidden');
        } else {
            mcqEl.classList.add('hidden');
        }

        // Timer
        let timeLeft = data.timeLimit;
        document.getElementById('timer').textContent = timeLeft;
        timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById('timer').textContent = Math.max(0, timeLeft);
            if (timeLeft <= 0) clearInterval(timerInterval);
        }, 1000);
    });

    socket.on('game:answer_count', (data) => {
        document.getElementById('answer-count').textContent = data.count;
        document.getElementById('answer-total').textContent = data.total;
    });

    // ═══════════════════════════════════════
    // Question Results
    // ═══════════════════════════════════════
    socket.on('game:question_results', (data) => {
        clearInterval(timerInterval);
        showScreen('screen-question-results');

        document.getElementById('correct-answer-text').textContent = data.correctAnswer;

        const explEl = document.getElementById('explanation');
        if (data.explanation) {
            explEl.textContent = data.explanation;
            explEl.classList.remove('hidden');
        } else {
            explEl.classList.add('hidden');
        }

        // Results list
        const resultsList = document.getElementById('question-results-list');
        resultsList.innerHTML = data.results.map(r => `
            <div class="result-row ${r.correct ? 'correct' : 'wrong'}">
                <span class="result-name">${r.name}</span>
                <span class="result-badge">${r.correct ? '✓' : r.answered ? '✗' : '—'}</span>
            </div>
        `).join('');

        // Standings
        const standingsList = document.getElementById('standings-list');
        standingsList.innerHTML = data.standings.map((p, i) => `
            <div class="standing-row">
                <span class="standing-rank">${i + 1}</span>
                <span class="standing-name">${p.name}</span>
                <span class="standing-score">${p.score} pts</span>
            </div>
        `).join('');
    });

    document.getElementById('btn-next').addEventListener('click', () => {
        socket.emit('host:next');
    });

    // ═══════════════════════════════════════
    // Final Results
    // ═══════════════════════════════════════
    socket.on('game:final_results', (rankings) => {
        showScreen('screen-final');

        // Podium
        const podium = document.getElementById('final-podium');
        const top3 = rankings.slice(0, 3);
        const medals = ['🥇', '🥈', '🥉'];
        podium.innerHTML = top3.map((p, i) => `
            <div class="podium-entry podium-${i + 1}">
                <div class="podium-medal">${medals[i]}</div>
                <div class="podium-name">${p.name}</div>
                <div class="podium-score">${p.score} pts</div>
            </div>
        `).join('');

        // Full rankings
        const rankingsEl = document.getElementById('final-rankings');
        rankingsEl.innerHTML = rankings.map((p, i) => `
            <div class="final-rank-row">
                <span class="rank">#${i + 1}</span>
                <span class="name">${p.name}</span>
                <span class="stats">${p.correct}/${p.total} (${p.total > 0 ? Math.round(p.correct / p.total * 100) : 0}%)</span>
                <span class="score">${p.score} pts</span>
            </div>
        `).join('');
    });

    document.getElementById('btn-new-game').addEventListener('click', () => {
        window.location.reload();
    });

    // ═══════════════════════════════════════
    // Standings bar (during game)
    // ═══════════════════════════════════════
    socket.on('game:question_results', (data) => {
        const bar = document.getElementById('standings-bar');
        if (!bar) return;
        const maxScore = Math.max(...data.standings.map(p => p.score), 1);
        bar.innerHTML = data.standings.slice(0, 5).map((p, i) => `
            <div class="bar-entry" style="--width: ${(p.score / maxScore) * 100}%; --color: ${PLAYER_COLORS[i]}">
                <span>${p.name}: ${p.score}</span>
            </div>
        `).join('');
    });

})();
