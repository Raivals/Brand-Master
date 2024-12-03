// Objet contenant toutes les catégories de questions
const categories = {
    riddle: [
        { question: "Je suis pris avant le repas, mais je ne suis pas mangé. Qui suis-je ?", answer: "Un appétit.", plusValue: 1 },
        { question: "Qu'est-ce qui est plus grand que Dieu, plus méchant que le diable, les pauvres en ont, les riches en ont besoin, et si on le mange, on meurt ?", answer: "Rien.", plusValue: 2 }
        // Ajoutez d'autres questions pour la catégorie riddle
    ],
    bonus_malus: [
        { question: "Si tu gagnes, tu peux doubler tes points. Qu'est-ce que tu choisis ?", answer: "Un bonus.", plusValue: 3 },
        { question: "Si tu perds, tu dois réduire tes points. Qu'est-ce que tu choisis ?", answer: "Un malus.", plusValue: -2 }
        // Ajoutez d'autres questions pour la catégorie bonus_malus
    ],
    action: [
        { question: "Effectue 10 pompes.", answer: "Fais 10 pompes!", plusValue: 2 },
        { question: "Fais un tour sur toi-même et décris ce que tu vois.", answer: "Effectue un tour sur toi-même!", plusValue: 1 }
        // Ajoutez d'autres questions pour la catégorie action
    ],
    mcq: [
        { question: "Quel est le plus grand océan du monde ?", answer: "L'océan Pacifique.", plusValue: 1 },
        { question: "Quel est le pays d'origine de la pizza ?", answer: "Italie.", plusValue: 2 }
        // Ajoutez d'autres questions pour la catégorie mcq
    ],
    sabotage: [
        { question: "Sabote la réponse de l'autre joueur.", answer: "Tu as saboté!", plusValue: -1 },
        { question: "Sabote une action dans le jeu.", answer: "Action sabotée!", plusValue: -2 }
        // Ajoutez d'autres questions pour la catégorie sabotage
    ],
    challenge: [
        { question: "Accepte ce défi et obtiens 5 points.", answer: "Défi accepté!", plusValue: 5 },
        { question: "Relève ce défi et tu gagnes des points bonus.", answer: "Défi relevé!", plusValue: 3 }
        // Ajoutez d'autres questions pour la catégorie challenge
    ]
};

// Détection de la catégorie active (en fonction de l'URL)
const currentCategory = window.location.pathname.split("/").pop().split(".")[0]; // Exemple: "riddle", "bonus_malus", etc.
const questions = categories[currentCategory] || []; // Charge les questions de la catégorie active

let currentIndex = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const questionNumberElement = document.getElementById('question-number');
const questionMinusElement = document.getElementById('question-minus');
const cardElement = document.getElementById('question-card');
const changeButton = document.getElementById('change-question');

// Mélange les éléments d'un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
}

// Met à jour l'affichage de la question
function updateQuestion() {
    const currentQuestion = questions[currentIndex];
    questionElement.textContent = currentQuestion.question;
    answerElement.textContent = currentQuestion.answer;
    questionNumberElement.textContent = `+${currentQuestion.plusValue}`;
    questionMinusElement.textContent = `-${currentQuestion.plusValue}`;
}

// Mélange les questions et met à jour la question affichée
cardElement.addEventListener('click', () => {
    cardElement.classList.toggle('flipped');
});

changeButton.addEventListener('click', () => {
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * questions.length);
    } while (nextIndex === currentIndex);

    currentIndex = nextIndex;
    updateQuestion();
    cardElement.classList.remove('flipped');
});

// Mélanger les questions dès le départ et afficher la première question
shuffleArray(questions);
updateQuestion();
