// Définir les questions pour chaque catégorie
const categories = {
    riddle: [
        { question: "Je suis pris avant le repas, mais je ne suis pas mangé. Qui suis-je ?", answer: "Un appétit.", plusValue: 1, minusValue: -1 },
        { question: "Qu'est-ce qui est plus grand que Dieu, plus méchant que le diable, les pauvres en ont, les riches en ont besoin, et si on le mange, on meurt ?", answer: "Rien.", plusValue: 2, minusValue: -1 }
    ],
    bonus_malus: [
        { question: "Si tu gagnes, tu peux doubler tes points. Qu'est-ce que tu choisis ?", answer: "Un bonus.", plusValue: 3, minusValue: -1 },
        { question: "Si tu perds, tu dois réduire tes points. Qu'est-ce que tu choisis ?", answer: "Un malus.", plusValue: 2, minusValue: -1 }
    ],
    action: [
        { question: "The one and only why played can read this card", answer: "Fais 10 pompes!", plusValue: 1, minusValue: -1 },
        { question: "The one and only why played can read this card", answer: "Effectue un tour sur toi-même!", plusValue: 2, minusValue: -1 }
    ],
    mcq: [
        { question: "Quel est le plus grand océan du monde ?", answer: "L'océan Pacifique.", plusValue: 1, minusValue: -1 },
        { question: "Quel est le pays d'origine de la pizza ?", answer: "Italie.", plusValue: 2, minusValue: -1 }
    ],
    sabotage: [
        { question: "Sabote la réponse de l'autre joueur.", answer: "Tu as saboté!", plusValue: -1, minusValue: -1 },
        { question: "Sabote une action dans le jeu.", answer: "Action sabotée!", plusValue: -2, minusValue: -1 }
    ],
    challenge: [
        { image: "../assets/dice.svg"},
        { image: "Relève ce défi et tu gagnes des points bonus."}
    ]
};

// Suivi des questions affichées
const displayedQuestions = {
    riddle: [],
    bonus_malus: [],
    action: [],
    mcq: [],
    sabotage: [],
    challenge: []
};

// Mélange les éléments d'un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
}

// Fonction pour choisir une question aléatoire dans une catégorie, sans répétition
function getRandomQuestion(category) {
    const questions = categories[category];

    // Si toutes les questions ont été affichées, réinitialiser et mélanger
    if (displayedQuestions[category].length === questions.length) {
        displayedQuestions[category] = []; // Réinitialiser les questions affichées
        shuffleArray(questions); // Mélanger à nouveau les questions
    }

    // Trouver une question qui n'a pas encore été affichée
    let randomQuestion;
    do {
        randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    } while (displayedQuestions[category].includes(randomQuestion));

    // Ajouter la question au tableau des questions affichées
    displayedQuestions[category].push(randomQuestion);

    return randomQuestion;
}

// Fonction pour afficher une question aléatoire dans un iframe
function displayRandomQuestionInModal(category, iframeId) {
    const question = getRandomQuestion(category);


    const iframe = document.getElementById(iframeId);

    // Injecter la question dans l'iframe
    iframe.contentWindow.postMessage({ question: question.question, answer: question.answer, plusValue: question.plusValue, minusValue: question.minusValue, image:question.image }, "*");

    // Assurez-vous que plusValue est un nombre valide
    const plusValue = Number(question.plusValue);

    // Mettre à jour les éléments question-number et question-number-minus avec les valeurs dynamiques
    document.getElementById('question').textContent = question.question;
    document.getElementById('question-number').textContent = question.plusValue;  
    document.getElementById('question-number-minus').textContent = question.plusValue; 
}


// Ajouter des événements pour chaque modal pour afficher une question aléatoire
document.getElementById('riddle-link').addEventListener('click', function () {
    displayRandomQuestionInModal('riddle', 'riddle-iframe');
    document.getElementById('riddle-modal').style.display = 'block';
});

document.getElementById('bonus-malus-link').addEventListener('click', function () {
    displayRandomQuestionInModal('bonus_malus', 'bonus-malus-iframe');
    document.getElementById('bonus-malus-modal').style.display = 'block';
});

document.getElementById('action-link').addEventListener('click', function () {
    displayRandomQuestionInModal('action', 'action-iframe');
    document.getElementById('action-modal').style.display = 'block';
});

document.getElementById('mcq-link').addEventListener('click', function () {
    displayRandomQuestionInModal('mcq', 'mcq-iframe');
    document.getElementById('mcq-modal').style.display = 'block';
});

document.getElementById('sabotage-link').addEventListener('click', function () {
    displayRandomQuestionInModal('sabotage', 'sabotage-iframe');
    document.getElementById('sabotage-modal').style.display = 'block';
});

document.getElementById('challenge-link').addEventListener('click', function () {
    displayRandomQuestionInModal('challenge', 'challenge-iframe');
    document.getElementById('challenge-modal').style.display = 'block';
});

// Ajouter des événements de fermeture pour chaque modal
document.querySelectorAll('.close').forEach(function (closeButton) {
    closeButton.addEventListener('click', function () {
        closeButton.closest('.modal').style.display = 'none';
    });
});

// Gestion du timer
let timerInterval; // Variable pour l'intervalle du timer
let timeLeft = 60; // Temps initial, 1 minute
const timerDisplay = document.getElementById('timer-display');

// Fonction pour mettre à jour l'affichage du timer
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Fonction pour démarrer le timer
function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Arrêter le timer lorsqu'il atteint 0
        } else {
            timeLeft--; // Décrémenter le temps restant
            updateTimerDisplay(); // Mettre à jour l'affichage du timer
        }
    }, 1000);
}

// Fonction pour réinitialiser le timer
function resetTimer() {
    clearInterval(timerInterval); // Arrêter l'intervalle en cours
    timeLeft = 60; // Réinitialiser le temps à 1 minute
    updateTimerDisplay(); // Réinitialiser l'affichage
}

// Démarrer le timer lorsque le bouton Start est cliqué
document.getElementById('start-1min').addEventListener('click', () => {
    startTimer();
});

// Réinitialiser le timer lorsque le bouton Reset est cliqué
document.getElementById('reset-timer').addEventListener('click', () => {
    resetTimer();
});
