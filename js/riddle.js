const questions = [
    { question: "Quelle est la capitale de la France ?", answer: "La capitale de la France est Paris.", plusValue: 1 },
    { question: "Combien de continents existe-t-il ?", answer: "Il y a 7 continents.", plusValue: 2 },
    { question: "Quelle est la plus grande planète du système solaire ?", answer: "La plus grande planète est Jupiter.", plusValue: 1 },
    { question: "Qui a écrit 'Les Misérables' ?", answer: "Victor Hugo a écrit 'Les Misérables'.", plusValue: 2 },
    { question: "Quelle est la vitesse de la lumière ?", answer: "La vitesse de la lumière est de 299 792 458 m/s.", plusValue: 1 },
    { question: "En quelle année l'homme a-t-il marché sur la Lune ?", answer: "L'homme a marché sur la Lune en 1969.", plusValue: 2 }
];

let currentIndex = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const questionNumberElement = document.getElementById('question-number');
const questionMinusElement = document.getElementById('question-minus');
const cardElement = document.getElementById('question-card');
const changeButton = document.getElementById('change-question');


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
}


function updateQuestion() {
    const currentQuestion = questions[currentIndex];
    questionElement.textContent = currentQuestion.question;
    answerElement.textContent = currentQuestion.answer;
    questionNumberElement.textContent = `+${currentQuestion.plusValue}`; // Affichage dynamique de +N
    questionMinusElement.textContent = `-${currentQuestion.plusValue}`; // Affichage dynamique de -N
}


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


shuffleArray(questions);
updateQuestion();
