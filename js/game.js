/**
 * Pause Miweb - Game Logic
 * Jeu de quizz familial multijoueur
 */

(function () {
    "use strict";

    // ═══════════════════════════════════════
    // State
    // ═══════════════════════════════════════
    const state = {
        players: [],           // { name, score, correct, total, color }
        currentPlayerIndex: 0,
        currentQuestion: null,
        questionCount: 0,
        usedQuestions: new Set(),
        selectedCategories: [],
        answered: false
    };

    const PLAYER_COLORS = [
        "#6c5ce7", "#e17055", "#00cec9", "#e84393",
        "#fdcb6e", "#00b894", "#0984e3", "#d63031"
    ];

    // ═══════════════════════════════════════
    // Sound Effects (Web Audio API)
    // ═══════════════════════════════════════
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;

    function getAudioCtx() {
        if (!audioCtx) audioCtx = new AudioCtx();
        return audioCtx;
    }

    function playCorrectSound() {
        try {
            const ctx = getAudioCtx();
            const now = ctx.currentTime;

            // Joyful ascending arpeggio
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "sine";
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.25, now + i * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + i * 0.1);
                osc.stop(now + i * 0.1 + 0.3);
            });
        } catch (e) { /* Audio not supported */ }
    }

    function playWrongSound() {
        try {
            const ctx = getAudioCtx();
            const now = ctx.currentTime;

            // Descending "buzz" for wrong answer
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(300, now);
            osc.frequency.exponentialRampToValueAtTime(100, now + 0.4);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.5);

            // Second dissonant tone
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.type = "square";
            osc2.frequency.setValueAtTime(150, now);
            osc2.frequency.exponentialRampToValueAtTime(80, now + 0.3);
            gain2.gain.setValueAtTime(0.08, now);
            gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.start(now);
            osc2.stop(now + 0.4);
        } catch (e) { /* Audio not supported */ }
    }

    const CATEGORY_INFO = {
        "casse-tete": { icon: "🧩", label: "Casse-tête", cssClass: "cat-casse-tete" },
        "actualites": { icon: "📰", label: "Actualités", cssClass: "cat-actualites" },
        "fakenews":   { icon: "🤥", label: "Fake News", cssClass: "cat-fakenews" },
        "celebrites": { icon: "⭐", label: "Célébrités", cssClass: "cat-celebrites" },
        "geek":       { icon: "🎮", label: "Geek", cssClass: "cat-geek" },
        "science":    { icon: "🔬", label: "Science", cssClass: "cat-science" },
        "histoire":   { icon: "📜", label: "Histoire", cssClass: "cat-histoire" }
    };

    // ═══════════════════════════════════════
    // DOM Elements
    // ═══════════════════════════════════════
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // Screens
    const screenWelcome = $("#screen-welcome");
    const screenGame = $("#screen-game");
    const screenResults = $("#screen-results");

    // Welcome
    const playersList = $("#players-list");
    const btnAddPlayer = $("#btn-add-player");
    const btnStart = $("#btn-start");

    // Game
    const scoreBar = $("#score-bar");
    const roundCounter = $("#round-counter");
    const playerAvatar = $("#player-avatar");
    const playerTurnName = $("#player-turn-name");
    const questionArea = $("#question-area");
    const questionCategory = $("#question-category");
    const questionText = $("#question-text");
    const questionHint = $("#question-hint");
    const mcqAnswers = $("#mcq-answers");
    const freeAnswer = $("#free-answer");
    const yesnoAnswers = $("#yesno-answers");
    const answerInput = $("#answer-input");
    const btnValidate = $("#btn-validate");
    const resultArea = $("#result-area");
    const resultIcon = $("#result-icon");
    const resultText = $("#result-text");
    const resultExplanation = $("#result-explanation");
    const resultPoints = $("#result-points");
    const btnGenerate = $("#btn-generate");
    const btnNext = $("#btn-next");
    const btnEndGame = $("#btn-end-game");

    // Results
    const finalScores = $("#final-scores");
    const btnReplay = $("#btn-replay");
    const btnHome = $("#btn-home");

    // ═══════════════════════════════════════
    // Fuzzy Matching (Levenshtein)
    // ═══════════════════════════════════════
    function levenshtein(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b[i - 1] === a[j - 1]) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    }

    function normalize(str) {
        return str
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")  // Remove accents
            .replace(/[''`]/g, "'")
            .replace(/[-_]/g, " ")
            .replace(/[^a-z0-9 ]/g, "")
            .replace(/\s+/g, " ");
    }

    function isFuzzyMatch(input, expected) {
        const normInput = normalize(input);
        const normExpected = normalize(expected);

        // Exact match after normalization
        if (normInput === normExpected) return true;

        // One contains the other
        if (normInput.includes(normExpected) || normExpected.includes(normInput)) return true;

        // Levenshtein with tolerance based on length
        const maxLen = Math.max(normInput.length, normExpected.length);
        const dist = levenshtein(normInput, normExpected);

        // Allow ~25% error rate, min 1 char tolerance
        const tolerance = Math.max(1, Math.floor(maxLen * 0.25));
        return dist <= tolerance;
    }

    function checkAnswer(input, acceptedAnswers) {
        return acceptedAnswers.some(answer => isFuzzyMatch(input, answer));
    }

    // ═══════════════════════════════════════
    // Screen Management
    // ═══════════════════════════════════════
    function showScreen(screen) {
        $$(".screen").forEach(s => s.classList.remove("active"));
        screen.classList.add("active");
    }

    // ═══════════════════════════════════════
    // Player Management
    // ═══════════════════════════════════════
    function createPlayerInput(index) {
        const div = document.createElement("div");
        div.className = "player-input";
        div.innerHTML = `
            <input type="text" placeholder="Joueur ${index + 1}" maxlength="20" class="player-name">
            <button class="btn-remove" title="Retirer">&times;</button>
        `;
        div.querySelector(".btn-remove").addEventListener("click", () => {
            if (playersList.children.length > 1) {
                div.remove();
                updateRemoveButtons();
                renumberPlayers();
            }
        });
        return div;
    }

    function updateRemoveButtons() {
        const inputs = playersList.querySelectorAll(".player-input");
        inputs.forEach((input, i) => {
            const btn = input.querySelector(".btn-remove");
            btn.style.visibility = inputs.length <= 1 ? "hidden" : "visible";
        });
    }

    function renumberPlayers() {
        const inputs = playersList.querySelectorAll(".player-name");
        inputs.forEach((input, i) => {
            if (!input.value) input.placeholder = `Joueur ${i + 1}`;
        });
    }

    btnAddPlayer.addEventListener("click", () => {
        if (playersList.children.length >= 8) return;
        const newInput = createPlayerInput(playersList.children.length);
        playersList.appendChild(newInput);
        updateRemoveButtons();
        newInput.querySelector("input").focus();
    });

    // ═══════════════════════════════════════
    // Start Game
    // ═══════════════════════════════════════
    btnStart.addEventListener("click", () => {
        // Collect players
        const names = [];
        playersList.querySelectorAll(".player-name").forEach((input, i) => {
            const name = input.value.trim() || `Joueur ${i + 1}`;
            names.push(name);
        });

        if (names.length === 0) return;

        // Collect categories
        const cats = [];
        $$(".category-toggle input:checked").forEach(cb => cats.push(cb.value));

        if (cats.length === 0) {
            alert("Sélectionnez au moins une catégorie !");
            return;
        }

        // Initialize state
        state.players = names.map((name, i) => ({
            name,
            score: 0,
            correct: 0,
            total: 0,
            color: PLAYER_COLORS[i % PLAYER_COLORS.length]
        }));
        state.currentPlayerIndex = 0;
        state.questionCount = 0;
        state.usedQuestions = new Set();
        state.selectedCategories = cats;
        state.answered = false;
        state.currentQuestion = null;

        showScreen(screenGame);
        renderScoreBar();
        updateCurrentPlayer();
        resetQuestionArea();
    });

    // ═══════════════════════════════════════
    // Score Bar
    // ═══════════════════════════════════════
    function renderScoreBar() {
        scoreBar.innerHTML = state.players.map((p, i) => `
            <div class="score-pill ${i === state.currentPlayerIndex ? 'active' : ''}" id="score-pill-${i}">
                <span class="score-avatar" style="background:${p.color}">${p.name.charAt(0).toUpperCase()}</span>
                <span class="score-name">${p.name}</span>
                <span class="score-value">${p.score}</span>
            </div>
        `).join("");
    }

    function updateCurrentPlayer() {
        const player = state.players[state.currentPlayerIndex];
        playerAvatar.style.background = player.color;
        playerAvatar.textContent = player.name.charAt(0).toUpperCase();
        playerTurnName.textContent = player.name;
        renderScoreBar();
    }

    // ═══════════════════════════════════════
    // Question Generation
    // ═══════════════════════════════════════
    function getAvailableQuestions() {
        return QUESTIONS_DB.filter((q, i) =>
            state.selectedCategories.includes(q.category) &&
            !state.usedQuestions.has(i)
        );
    }

    function pickRandomQuestion() {
        const available = getAvailableQuestions();
        if (available.length === 0) {
            // Reset used questions if all used
            state.usedQuestions.clear();
            return pickRandomQuestion();
        }
        const q = available[Math.floor(Math.random() * available.length)];
        const index = QUESTIONS_DB.indexOf(q);
        state.usedQuestions.add(index);
        return q;
    }

    function resetQuestionArea() {
        questionArea.classList.add("hidden");
        resultArea.classList.add("hidden");
        mcqAnswers.classList.add("hidden");
        freeAnswer.classList.add("hidden");
        yesnoAnswers.classList.add("hidden");
        btnGenerate.classList.remove("hidden");
        btnNext.classList.add("hidden");
        answerInput.value = "";
        answerInput.className = "";
        state.answered = false;
    }

    function displayQuestion(q) {
        state.currentQuestion = q;
        state.questionCount++;
        state.answered = false;

        const catInfo = CATEGORY_INFO[q.category];

        roundCounter.textContent = `Question ${state.questionCount}`;
        questionCategory.textContent = `${catInfo.icon} ${catInfo.label}`;
        questionCategory.className = `category-badge ${catInfo.cssClass}`;
        questionText.textContent = q.question;
        questionHint.textContent = q.hint || "";

        // Hide all answer types
        mcqAnswers.classList.add("hidden");
        freeAnswer.classList.add("hidden");
        yesnoAnswers.classList.add("hidden");
        resultArea.classList.add("hidden");

        if (q.type === "mcq") {
            displayMCQ(q);
        } else if (q.type === "free") {
            displayFreeAnswer();
        } else if (q.type === "yesno") {
            displayYesNo();
        }

        questionArea.classList.remove("hidden");
        btnGenerate.classList.add("hidden");
    }

    // ═══════════════════════════════════════
    // MCQ Display
    // ═══════════════════════════════════════
    function displayMCQ(q) {
        const letters = ["A", "B", "C", "D"];
        mcqAnswers.innerHTML = q.options.map((opt, i) => `
            <button class="btn-mcq" data-index="${i}">
                <span class="mcq-letter">${letters[i]}</span>
                <span>${opt}</span>
            </button>
        `).join("");
        mcqAnswers.classList.remove("hidden");

        mcqAnswers.querySelectorAll(".btn-mcq").forEach(btn => {
            btn.addEventListener("click", () => {
                if (state.answered) return;
                state.answered = true;

                const selected = parseInt(btn.dataset.index);
                const isCorrect = selected === q.answer;

                // Disable all buttons
                mcqAnswers.querySelectorAll(".btn-mcq").forEach(b => b.classList.add("disabled"));

                // Highlight correct and wrong
                mcqAnswers.querySelectorAll(".btn-mcq")[q.answer].classList.add("correct");
                if (!isCorrect) {
                    btn.classList.add("wrong");
                    btn.classList.add("shake");
                }

                showResult(isCorrect, q);
            });
        });
    }

    // ═══════════════════════════════════════
    // Free Answer Display
    // ═══════════════════════════════════════
    function displayFreeAnswer() {
        freeAnswer.classList.remove("hidden");
        answerInput.value = "";
        answerInput.className = "";
        answerInput.disabled = false;
        btnValidate.disabled = false;
        setTimeout(() => answerInput.focus(), 100);
    }

    function handleFreeValidation() {
        if (state.answered) return;
        const input = answerInput.value.trim();
        if (!input) return;

        state.answered = true;
        answerInput.disabled = true;
        btnValidate.disabled = true;

        const isCorrect = checkAnswer(input, state.currentQuestion.answers);
        answerInput.classList.add(isCorrect ? "correct" : "wrong");
        if (!isCorrect) answerInput.classList.add("shake");

        showResult(isCorrect, state.currentQuestion);
    }

    btnValidate.addEventListener("click", handleFreeValidation);
    answerInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") handleFreeValidation();
    });

    // ═══════════════════════════════════════
    // Yes/No Display
    // ═══════════════════════════════════════
    function displayYesNo() {
        yesnoAnswers.classList.remove("hidden");

        // Reset buttons
        yesnoAnswers.querySelectorAll(".btn-yesno").forEach(btn => {
            btn.classList.remove("correct", "wrong", "disabled", "shake");
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
        });

        yesnoAnswers.querySelectorAll(".btn-yesno").forEach(btn => {
            btn.addEventListener("click", () => {
                if (state.answered) return;
                state.answered = true;

                const selected = btn.dataset.answer;
                const isCorrect = selected === state.currentQuestion.answer;

                yesnoAnswers.querySelectorAll(".btn-yesno").forEach(b => b.classList.add("disabled"));

                // Highlight correct
                const correctBtn = yesnoAnswers.querySelector(
                    `[data-answer="${state.currentQuestion.answer}"]`
                );
                correctBtn.classList.add("correct");

                if (!isCorrect) {
                    btn.classList.add("wrong");
                    btn.classList.add("shake");
                }

                showResult(isCorrect, state.currentQuestion);
            });
        });
    }

    // ═══════════════════════════════════════
    // Result Display
    // ═══════════════════════════════════════
    function showResult(isCorrect, question) {
        const player = state.players[state.currentPlayerIndex];
        player.total++;

        let points = 0;
        if (isCorrect) {
            player.correct++;
            points = question.type === "free" ? 3 : question.type === "yesno" ? 1 : 2;
            player.score += points;
        }

        if (isCorrect) {
            playCorrectSound();
        } else {
            playWrongSound();
        }

        resultIcon.textContent = isCorrect ? "🎉" : "😅";
        resultText.textContent = isCorrect ? "Bonne réponse !" : "Mauvaise réponse !";
        resultText.className = `result-text ${isCorrect ? "correct" : "wrong"}`;
        resultExplanation.textContent = question.explanation || "";

        if (isCorrect) {
            resultPoints.textContent = `+${points} point${points > 1 ? "s" : ""} !`;
            if (points === 3) {
                launchConfetti();
            }
        } else {
            resultPoints.textContent = "";
            if (question.type === "free") {
                resultPoints.textContent = `Réponse attendue : ${question.answers[0]}`;
                resultPoints.style.color = "var(--gray)";
            }
        }

        resultArea.classList.remove("hidden");
        btnNext.classList.remove("hidden");
        renderScoreBar();

        // Animate score pill
        const pill = $(`#score-pill-${state.currentPlayerIndex}`);
        if (pill && isCorrect) {
            pill.style.transform = "scale(1.15)";
            setTimeout(() => pill.style.transform = "", 400);
        }
    }

    // ═══════════════════════════════════════
    // Next Player
    // ═══════════════════════════════════════
    btnNext.addEventListener("click", () => {
        state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
        updateCurrentPlayer();
        resetQuestionArea();
    });

    // ═══════════════════════════════════════
    // Generate Question
    // ═══════════════════════════════════════
    btnGenerate.addEventListener("click", () => {
        const q = pickRandomQuestion();
        displayQuestion(q);
    });

    // ═══════════════════════════════════════
    // End Game
    // ═══════════════════════════════════════
    btnEndGame.addEventListener("click", () => {
        if (state.questionCount === 0) {
            showScreen(screenWelcome);
            return;
        }
        showFinalResults();
    });

    function showFinalResults() {
        const sorted = [...state.players].sort((a, b) => b.score - a.score);

        finalScores.innerHTML = sorted.map((player, rank) => {
            const accuracy = player.total > 0
                ? Math.round((player.correct / player.total) * 100)
                : 0;
            const medal = rank === 0 ? "🥇" : rank === 1 ? "🥈" : rank === 2 ? "🥉" : "";

            return `
                <div class="final-score-card rank-${rank + 1}" style="animation-delay: ${rank * 0.15}s">
                    <span class="rank-number">${medal || (rank + 1)}</span>
                    <span class="final-avatar" style="background:${player.color}">${player.name.charAt(0).toUpperCase()}</span>
                    <div class="final-info">
                        <div class="final-name">${player.name}</div>
                        <div class="final-stats">${player.correct}/${player.total} bonnes réponses (${accuracy}%)</div>
                    </div>
                    <span class="final-score-value">${player.score}</span>
                </div>
            `;
        }).join("");

        showScreen(screenResults);
        launchConfetti();
    }

    // ═══════════════════════════════════════
    // Replay / Home
    // ═══════════════════════════════════════
    btnReplay.addEventListener("click", () => {
        // Keep same players but reset scores
        state.players.forEach(p => {
            p.score = 0;
            p.correct = 0;
            p.total = 0;
        });
        state.currentPlayerIndex = 0;
        state.questionCount = 0;
        state.usedQuestions.clear();
        state.answered = false;
        state.currentQuestion = null;

        showScreen(screenGame);
        renderScoreBar();
        updateCurrentPlayer();
        resetQuestionArea();
    });

    btnHome.addEventListener("click", () => {
        showScreen(screenWelcome);
    });

    // ═══════════════════════════════════════
    // Confetti Effect
    // ═══════════════════════════════════════
    function launchConfetti() {
        const container = document.createElement("div");
        container.className = "confetti";
        document.body.appendChild(container);

        const colors = ["#6c5ce7", "#e17055", "#00cec9", "#fdcb6e", "#e84393", "#00b894", "#0984e3"];

        for (let i = 0; i < 50; i++) {
            const piece = document.createElement("div");
            piece.className = "confetti-piece";
            piece.style.left = Math.random() * 100 + "%";
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = Math.random() * 1.5 + "s";
            piece.style.width = (Math.random() * 8 + 5) + "px";
            piece.style.height = (Math.random() * 8 + 5) + "px";
            piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
            container.appendChild(piece);
        }

        setTimeout(() => container.remove(), 4000);
    }

    // ═══════════════════════════════════════
    // Initialize remove button visibility
    // ═══════════════════════════════════════
    updateRemoveButtons();

})();
