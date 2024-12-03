// Définir les questions pour chaque catégorie
const categories = {
    riddle: [
        { question: "Je suis pris avant le repas, mais je ne suis pas mangé. Qui suis-je ?", answer: "Un appétit.", plusValue: 1 },
        { question: "Qu'est-ce qui est plus grand que Dieu, plus méchant que le diable, les pauvres en ont, les riches en ont besoin, et si on le mange, on meurt ?", answer: "Rien.", plusValue: 2 }
    ],
    bonus_malus: [
        { question: "Si tu gagnes, tu peux doubler tes points. Qu'est-ce que tu choisis ?", answer: "Un bonus.", plusValue: 3 },
        { question: "Si tu perds, tu dois réduire tes points. Qu'est-ce que tu choisis ?", answer: "Un malus.", plusValue: -2 }
    ],
    action: [
        { question: "Effectue 10 pompes.", answer: "Fais 10 pompes!", plusValue: 2 },
        { question: "Fais un tour sur toi-même et décris ce que tu vois.", answer: "Effectue un tour sur toi-même!", plusValue: 1 }
    ],
    mcq: [
        { question: "Quel est le plus grand océan du monde ?", answer: "L'océan Pacifique.", plusValue: 1 },
        { question: "Quel est le pays d'origine de la pizza ?", answer: "Italie.", plusValue: 2 }
    ],
    sabotage: [
        { question: "Sabote la réponse de l'autre joueur.", answer: "Tu as saboté!", plusValue: -1 },
        { question: "Sabote une action dans le jeu.", answer: "Action sabotée!", plusValue: -2 }
    ],
    challenge: [
        { question: "Accepte ce défi et obtiens 5 points.", answer: "Défi accepté!", plusValue: 5 },
        { question: "Relève ce défi et tu gagnes des points bonus.", answer: "Défi relevé!", plusValue: 3 }
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

    // Injecter la question dans l'iframe, ou gérer le contenu autrement
    iframe.contentWindow.postMessage({ question: question.question, answer: question.answer, plusValue: question.plusValue }, "*");
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

