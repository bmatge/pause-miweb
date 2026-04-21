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
            <div class="player-pill" style="animation-delay: ${i * 0.05}s">
                <span class="avatar" style="background: ${PLAYER_COLORS[i % PLAYER_COLORS.length]}">${p.name[0].toUpperCase()}</span>
                <span class="player-pill__name">${p.name}</span>
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
        showScreen('screen-game');
    });

    socket.on('game:question', (data) => {
        showScreen('screen-game');
        clearInterval(timerInterval);

        document.getElementById('round-counter').textContent = `Question ${data.index}/${data.total}`;
        const catBadge = document.getElementById('question-category');
        catBadge.className = `question-card__badge category-badge cat-${data.category}`;
        catBadge.textContent = CATEGORY_LABELS[data.category] || data.category;
        document.getElementById('question-text').textContent = data.question;
        document.getElementById('answer-count').textContent = '0';
        document.getElementById('answer-total').textContent = document.getElementById('player-count')?.textContent || '?';

        // Progress bar
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            progressFill.style.width = `${(data.index / data.total) * 100}%`;
        }

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

        // Timer with ring animation
        const timerEl = document.getElementById('timer');
        const timerRing = document.querySelector('.timer-ring');
        const timerFill = document.querySelector('.timer-ring__fill');
        const CIRC = 2 * Math.PI * 29; // matches r=29 in SVG
        if (timerFill) {
            timerFill.style.strokeDasharray = CIRC;
            timerFill.style.strokeDashoffset = '0';
        }

        let timeLeft = data.timeLimit;
        const totalTime = data.timeLimit;
        timerEl.textContent = timeLeft;
        if (timerRing) timerRing.classList.remove('warn', 'danger');

        timerInterval = setInterval(() => {
            timeLeft--;
            timerEl.textContent = Math.max(0, timeLeft);
            if (timerFill) {
                timerFill.style.strokeDashoffset = CIRC * (1 - Math.max(0, timeLeft) / totalTime);
            }
            if (timerRing) {
                if (timeLeft <= 3) {
                    timerRing.classList.remove('warn');
                    timerRing.classList.add('danger');
                } else if (timeLeft <= 6) {
                    timerRing.classList.add('warn');
                }
            }
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
    let previousStandings = [];

    socket.on('game:question_results', (data) => {
        clearInterval(timerInterval);
        showScreen('screen-question-results');

        document.getElementById('correct-answer-text').textContent = data.correctAnswer;

        const explEl = document.getElementById('explanation');
        if (data.explanation) {
            explEl.textContent = '« ' + data.explanation + ' »';
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

        // Compute rank deltas from previous standings
        const prevRanks = {};
        previousStandings.forEach((p, i) => { prevRanks[p.id || p.name] = i; });

        // Standings (podium list)
        const standingsList = document.getElementById('standings-list');
        standingsList.innerHTML = data.standings.map((p, i) => {
            const prevIdx = prevRanks[p.id || p.name];
            const diff = prevIdx !== undefined ? prevIdx - i : 0;
            const initial = (p.name[0] || '?').toUpperCase();
            const color = PLAYER_COLORS[i % PLAYER_COLORS.length];

            let rowCls = 'podium-row';
            if (i === 0 && p.score > 0) rowCls += ' leader';
            if (diff > 0) rowCls += ' moving-up';
            else if (diff < 0) rowCls += ' moving-down';

            let deltaHtml = '';
            if (prevIdx === undefined || diff === 0) {
                deltaHtml = '<span class="podium-delta zero">—</span>';
            } else if (diff > 0) {
                deltaHtml = `<span class="podium-delta up">▲ ${diff}</span>`;
            } else {
                deltaHtml = `<span class="podium-delta down">▼ ${Math.abs(diff)}</span>`;
            }

            return `
                <div class="${rowCls}" style="--avatar-color: ${color}">
                    <div class="podium-rank">${i + 1}</div>
                    <div class="podium-name">
                        <span class="avatar avatar--sm" style="background: ${color}">${initial}</span>
                        ${p.name}
                        ${deltaHtml}
                    </div>
                    <div class="podium-score">${p.score} pts</div>
                </div>
            `;
        }).join('');

        previousStandings = data.standings.map(p => ({ id: p.id, name: p.name, score: p.score }));
    });

    document.getElementById('btn-next').addEventListener('click', () => {
        socket.emit('host:next');
    });

    // ═══════════════════════════════════════
    // Final Results
    // ═══════════════════════════════════════
    socket.on('game:final_results', (rankings) => {
        showScreen('screen-final');

        const top3 = rankings.slice(0, 3);
        const winner = rankings[0];

        // Winner subtitle
        const subtitle = document.querySelector('.final-header__subtitle');
        if (subtitle && winner) {
            subtitle.innerHTML = `Bravo <strong style="color: var(--gold)">${winner.name}</strong>, tu étales la confiture comme personne.`;
        }

        // Podium stage (visual 3D podium: 2nd, 1st, 3rd order)
        const podium = document.getElementById('final-podium');
        const layout = [top3[1], top3[0], top3[2]].filter(Boolean);
        podium.innerHTML = layout.map(p => {
            const rank = p === top3[0] ? 1 : p === top3[1] ? 2 : 3;
            const idx = rankings.indexOf(p);
            const color = PLAYER_COLORS[idx % PLAYER_COLORS.length];
            const initial = (p.name[0] || '?').toUpperCase();
            const crown = rank === 1 ? '<div class="crown">👑</div>' : '';
            return `
                <div class="podium-pillar">
                    ${crown}
                    <div class="podium-avatar" style="background: ${color}; ${rank === 1 ? 'box-shadow: 0 12px 30px rgba(251,191,36,0.5), 0 0 0 4px rgba(251,191,36,0.3);' : ''}">${initial}</div>
                    <div class="podium-pillar__name">${p.name}</div>
                    <div class="podium-pillar__score">${p.score} pts</div>
                    <div class="pillar-block pillar-${rank}">#${rank}</div>
                </div>
            `;
        }).join('');

        // Stats cards
        const totalQuestions = winner?.total || 0;
        document.getElementById('stat-questions').textContent = totalQuestions;
        document.getElementById('stat-players').textContent = rankings.length;
        document.getElementById('stat-best-score').textContent = winner ? winner.score : 0;

        // Full rankings
        const rankingsEl = document.getElementById('final-rankings');
        rankingsEl.innerHTML = rankings.map((p, i) => {
            const color = PLAYER_COLORS[i % PLAYER_COLORS.length];
            const initial = (p.name[0] || '?').toUpperCase();
            const accuracy = p.total > 0 ? Math.round(p.correct / p.total * 100) : 0;
            return `
                <div class="final-rank-row">
                    <span class="final-rank-row__rank">#${i + 1}</span>
                    <span class="avatar avatar--sm" style="background: ${color}">${initial}</span>
                    <span class="final-rank-row__name">${p.name}</span>
                    <span class="final-rank-row__stats">${p.correct}/${p.total} · ${accuracy}%</span>
                    <span class="final-rank-row__score">${p.score} pts</span>
                </div>
            `;
        }).join('');
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
