/**
 * Pause Miweb - Player Interface
 */
(function () {
    "use strict";

    const socket = io();
    let timerInterval = null;
    let myName = '';

    // ═══════════════════════════════════════
    // Screens
    // ═══════════════════════════════════════
    function showScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    }

    // ═══════════════════════════════════════
    // Join
    // ═══════════════════════════════════════
    // Auto-fill room code from URL
    const params = new URLSearchParams(window.location.search);
    if (params.get('room')) {
        document.getElementById('input-room').value = params.get('room');
    }

    document.getElementById('btn-join').addEventListener('click', joinRoom);
    document.getElementById('input-name').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') joinRoom();
    });
    document.getElementById('input-room').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') joinRoom();
    });

    function joinRoom() {
        const name = document.getElementById('input-name').value.trim();
        const roomCode = document.getElementById('input-room').value.trim().toUpperCase();

        if (!name) {
            showError('Entre ton prénom !');
            return;
        }
        if (!roomCode || roomCode.length !== 4) {
            showError('Code de room invalide');
            return;
        }

        socket.emit('player:join', { name, roomCode }, (response) => {
            if (response.error) {
                showError(response.error);
                return;
            }
            myName = name;
            document.getElementById('my-name').textContent = name;
            showScreen('screen-waiting');
        });
    }

    function showError(msg) {
        const el = document.getElementById('join-error');
        el.textContent = msg;
        el.classList.remove('hidden');
        setTimeout(() => el.classList.add('hidden'), 3000);
    }

    // ═══════════════════════════════════════
    // Game
    // ═══════════════════════════════════════
    const CATEGORY_LABELS = {
        'casse-tete': 'Casse-tête',
        'actualites': 'Actualités',
        'fakenews': 'Fake News',
        'celebrites': 'Célébrités',
        'geek': 'Geek',
        'science': 'Science',
        'histoire': 'Histoire',
        'trump': 'Trump',
        'anime-disney': 'Anime & Disney'
    };

    socket.on('game:started', () => {
        // Will receive first question shortly
    });

    socket.on('game:question', (data) => {
        showScreen('screen-question');
        clearInterval(timerInterval);

        document.getElementById('p-round').textContent = `Question ${data.index}/${data.total}`;
        const pCat = document.getElementById('p-category');
        pCat.className = `category-badge cat-${data.category}`;
        pCat.textContent = CATEGORY_LABELS[data.category] || data.category;
        document.getElementById('p-question-text').textContent = data.question;

        // Hide all answer types
        document.getElementById('p-mcq').classList.add('hidden');
        document.getElementById('p-yesno').classList.add('hidden');
        document.getElementById('p-free').classList.add('hidden');

        // Show relevant answer type
        if (data.type === 'mcq') {
            const mcqEl = document.getElementById('p-mcq');
            mcqEl.innerHTML = data.options.map((opt, i) => `
                <button class="btn btn-answer btn-mcq-option" data-answer="${i}">
                    <span class="option-letter">${'ABCD'[i]}</span> ${opt}
                </button>
            `).join('');
            mcqEl.classList.remove('hidden');

            // Attach events
            mcqEl.querySelectorAll('.btn-mcq-option').forEach(btn => {
                btn.addEventListener('click', () => submitAnswer(btn.dataset.answer));
            });
        } else if (data.type === 'yesno') {
            document.getElementById('p-yesno').classList.remove('hidden');
        } else if (data.type === 'free') {
            document.getElementById('p-free').classList.remove('hidden');
            document.getElementById('p-free-input').value = '';
            document.getElementById('p-free-input').focus();
        }

        // Timer
        let timeLeft = data.timeLimit;
        document.getElementById('p-timer').textContent = timeLeft;
        timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById('p-timer').textContent = Math.max(0, timeLeft);
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                showScreen('screen-answered');
            }
        }, 1000);
    });

    // Yes/No buttons
    document.querySelectorAll('#p-yesno .btn-answer').forEach(btn => {
        btn.addEventListener('click', () => submitAnswer(btn.dataset.answer));
    });

    // Free text submit
    document.getElementById('p-free-submit').addEventListener('click', () => {
        const val = document.getElementById('p-free-input').value.trim();
        if (val) submitAnswer(val);
    });
    document.getElementById('p-free-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = document.getElementById('p-free-input').value.trim();
            if (val) submitAnswer(val);
        }
    });

    function submitAnswer(answer) {
        clearInterval(timerInterval);
        socket.emit('player:answer', { answer });
        showScreen('screen-answered');
    }

    // ═══════════════════════════════════════
    // Results
    // ═══════════════════════════════════════
    socket.on('game:question_results', (data) => {
        showScreen('screen-result');

        const myResult = data.results.find(r => r.id === socket.id);
        const icon = document.getElementById('p-result-icon');
        const text = document.getElementById('p-result-text');
        const correctEl = document.getElementById('p-correct-answer');
        const scoreEl = document.getElementById('p-score');

        if (myResult && myResult.correct) {
            icon.textContent = '🎉';
            icon.className = 'result-icon correct';
            text.textContent = 'Bonne réponse !';
        } else {
            icon.textContent = '😅';
            icon.className = 'result-icon wrong';
            text.textContent = myResult?.answered ? 'Mauvaise réponse' : "Temps écoulé !";
        }

        correctEl.textContent = `Réponse : ${data.correctAnswer}`;
        scoreEl.textContent = `Score : ${myResult?.score || 0} pts`;
    });

    // ═══════════════════════════════════════
    // Final
    // ═══════════════════════════════════════
    socket.on('game:final_results', (rankings) => {
        showScreen('screen-player-final');

        const myRank = rankings.findIndex(r => r.id === socket.id) + 1;
        const myData = rankings.find(r => r.id === socket.id);

        const medals = ['🥇', '🥈', '🥉'];
        document.getElementById('p-final-rank').innerHTML = myRank <= 3
            ? `<span class="big-medal">${medals[myRank - 1]}</span><br>${myRank === 1 ? 'Champion !' : myRank + 'ème'}`
            : `<span class="rank-number">#${myRank}</span>`;

        document.getElementById('p-final-score').textContent = myData
            ? `${myData.score} pts — ${myData.correct}/${myData.total} bonnes réponses`
            : '';
    });

    document.getElementById('btn-play-again').addEventListener('click', () => {
        window.location.reload();
    });

    // Host disconnected
    socket.on('game:ended', (data) => {
        alert("L'hôte a quitté la partie.");
        window.location.reload();
    });

})();
