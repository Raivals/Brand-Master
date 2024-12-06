// Définir les questions pour chaque catégorie
const categories = {
    riddle: [
        { question: "I can be scaled without losing quality. What am I?", answer: "Vector", plusValue: +3, minusValue: -1 },
        { question: "I’m the smallest part of a digital image. What am I?", answer: "Pixel", plusValue: +2, minusValue: -1 },
        { question: "I’m used to legally protect a brand. What am I?", answer: "Trademark", plusValue: +4, minusValue: -2 },
        { question: "I define the visible elements of a brand. What am I?", answer: "Brand Identity", plusValue: +3, minusValue: 0 },
        { question: "I can change colors to match events or seasons.", answer: "Dynamic Logo", plusValue: +4, minusValue: 0 },
        { question: "I am the number of dots per inch on a printed page. What am I?", answer: "DPI", plusValue: +3, minusValue: -1 },
        { question: "I am the number of pixels per inch in a digital image. What am I?", answer: "PPI", plusValue: +3, minusValue: -1 },
        { question: "I group different visual elements like fonts, colors, and logos for a brand. What am I?", answer: "Design Elements", plusValue: +4, minusValue: -2 },
        { question: "I’m a set of colors that defines a brand’s visual identity. What am I?", answer: "Color Palette", plusValue: +3, minusValue: -1 },
        { question: "I define the role of each brand in a company, like Coca-Cola and Diet Coke. What am I?", answer: "Brand Architecture", plusValue: +4, minusValue: -2 },
        { question: "I’m the stylized text used for a brand name, such as Coca-Cola’s logo. What am I?", answer: "Wordmark", plusValue: +3, minusValue: -1 },
        { question: "I’m the font style, size, and spacing used to create layouts. What am I?", answer: "Typography", plusValue: +3, minusValue: -1 },
        { question: "I represent the smallest unit of an image on a screen. What am I?", answer: "Pixel", plusValue: +2, minusValue: -1 },
        { question: "I am an image type that becomes pixelated when enlarged. What am I?", answer: "Raster", plusValue: +3, minusValue: -2 },
        { question: "I am a design that can adapt to events, like Google’s homepage logo. What am I?", answer: "Dynamic Logo", plusValue: +4, minusValue: 0 },
        { question: "I’m the type of graphics that remain sharp no matter the size. What am I?", answer: "Vector", plusValue: +3, minusValue: -1 },
        { question: "I define the main colors used in a brand’s visuals. What am I?", answer: "Primary Brand Colors", plusValue: +3, minusValue: -1 },
        { question: "I can be shrunk or enlarged infinitely without losing quality. What am I?", answer: "Scalable", plusValue: +4, minusValue: 0 },
        { question: "I legally protect your brand’s logo or name. What am I?", answer: "Trademark", plusValue: +4, minusValue: -1 },
        { question: "I am used to define the visible elements of a brand. What am I?", answer: "Brand Identity", plusValue: +3, minusValue: 0 },
        { question: "I help you ensure your designs are consistent with your brand. What am I?", answer: "Brand Style Guide", plusValue: +4, minusValue: -2 },
        { question: "I am an additional set of colors that complement the main ones. What am I?", answer: "Secondary Brand Colors", plusValue: +2, minusValue: 0 },
        { question: "I’m a file type for high-quality digital images like .jpg and .png. What am I?", answer: "Raster File", plusValue: +3, minusValue: -1 },
        { question: "I define how sub-brands relate to each other within a company. What am I?", answer: "Brand Architecture", plusValue: +4, minusValue: -2 },
        { question: "I define the font, colors, and layouts used to create consistency in branding. What am I?", answer: "Design Elements", plusValue: +3, minusValue: -1 },
    ],
    bonus_malus: [
        { question: "Your Adobe Illustrator crashes unexpectedly! Skip your next turn as you recover your work.", answer: "", plusValue: "", minusValue: "" },
        { question: "A sudden spark of genius strikes! Move forward 3 circles and play the activity on the add-on.", answer: "", plusValue: "", minusValue: "" },
        { question: "Your client rejects your design due to the wrong color palette. Move back 2 circles and skip the activity on the new circle.", answer: "", plusValue: "", minusValue: "" },
        { question: "You successfully register your brand trademark. Jump directly to the next orange (duel) circle and challenge a player.", answer: "", plusValue: "", minusValue: "" },
        { question: "You finally nail the DPI and PPI alignment for a perfect print! Roll the dice again and move forward the full value.", answer: "", plusValue: "", minusValue: "" },
        { question: "Your font library gets corrupted! Skip your next turn to reinstall it.", answer: "", plusValue: "" , minusValue: "" },
        { question: "You discover a hidden shortcut in Illustrator! Move forward 1 circle and use the sabotage card.", answer: "", plusValue: "" , minusValue: "" },
        { question: "Your client approves the design without changes! Roll again and move forward the full value.", answer: "", plusValue: "" , minusValue: "" },
        { question: "A printing error smudges your brand logo. Roll again and move backward half the value, don't play the activity where you land.", answer: "", plusValue: "", minusValue: "" },
        { question: "You unlock a new Adobe feature! Jump to the next Yellow circle and play the activity.", answer: "", plusValue:"" , minusValue: "" },
        { question: "Your dynamic logo gets featured in a design magazine! Move forward 3 circles and skip the activity.", answer: "", plusValue:"" , minusValue: "" },
        { question: "The color calibration on your monitor fails. Skip your next turn to fix it.", answer: "", plusValue:"" , minusValue: "" },
        { question: "You receive unexpected feedback that improves your design! Move forward 2 circles and skip the activity.", answer: "", plusValue:"" , minusValue: "" },
        { question: "Your vector graphic gets corrupted! Move back 2 circles and play the activity.", answer: "", plusValue:"" , minusValue: "" },
        { question: "Your typography choice wins an award! Jump to the NEAREST orange (duel) circle to challenge the envious.", answer: "", plusValue:"" , minusValue: "" },
        { question: "Your raster file resolution is too low! Skip the next turn to recreate it.", answer: "", plusValue:"" , minusValue: "" },
        { question: "Your brand style guide is updated! Roll the dice again and move half the value forward.", answer: "", plusValue: "", minusValue: "" },
        { question: "A competitor steals your design idea! Challenge a player to thumb wrestling, winner moves 2 circles (skipping activity)", answer: "", plusValue:"" , minusValue: "" },
        { question: "You get a flash of brilliance and perfect the logo design! Move forward 4 circles, skip the activity.", answer: "", plusValue:"" , minusValue:""  },
        { question: "Your print file saves in the wrong format! Move back 2 circles, play the activity.", answer: "", plusValue: "", minusValue: "" },
        { question: "Your client loves your secondary color palette! Roll again and move forward, skip activity unless its sabotage.", answer: "", plusValue:"" , minusValue:""  },
        { question: "Your trademark application is delayed. Skip your next turn.", answer: "", plusValue:"" , minusValue:""  },
        { question: "A misalignment in DPI causes printing delays. Move back 1 circle, ignore Duel.", answer: "", plusValue:"" , minusValue: "" },
        { question: "Your scalable vector graphic impresses the client! Move 3 circles forward, skip activity.", answer: "", plusValue:"" , minusValue: "" },
        { question: "You solve a major branding issue! Move forward 2 circles, skip activity.", answer: "", plusValue:"" , minusValue: "" },
    ],
    action: [
        { question: "", answer: "Draw the Apple logo without using the iconic apple shape.", plusValue: 2, minusValue: "" },
        { question: "", answer: "Hum the McDonald’s ‘I’m Lovin’ It’ jingle without saying the words ‘McDonald’s’ or ‘lovin’.’", plusValue: 3, minusValue:""  },
        { question: "", answer: "Describe Coca-Cola without using the words ‘red,’ ‘drink,’ or ‘soda.’", plusValue: 2, minusValue:""  },
        { question: "", answer: "Sketch the Nike swoosh logo without any text.", plusValue: 1, minusValue:  ""},
        { question: "", answer: "Act out the concept of ‘brand identity’ without speaking.", plusValue: 2, minusValue: "" },
        { question: "", answer: "Draw a dynamic logo idea for Google (no text allowed).", plusValue: 3, minusValue:""  },
        { question: "", answer: "Describe the term ‘vector’ without saying ‘scalable’ or ‘quality.’", plusValue: 2, minusValue:  ""},
        { question: "", answer: "Sing a jingle for a famous chocolate brand without naming it or the product.", plusValue: 1, minusValue: "" },
        { question: "", answer: "Draw the Starbucks logo, avoiding text and the face details.", plusValue: 3, minusValue: "" },
        { question: "", answer: "Explain the concept of a color palette without using ‘color’ or ‘design.’", plusValue: 2, minusValue:  ""},
        { question: "", answer: "Act out the term ‘trademark’ without using words.", plusValue: 1, minusValue: "" },
        { question: "", answer: "Draw a Pepsi logo without using text or the red/blue colors.", plusValue: 2, minusValue: "" },
        { question: "", answer: "Make others guess ‘DPI’ by describing it without saying ‘dots,’ ‘inch,’ or ‘print.’", plusValue: 3, minusValue: "" },
        { question: "", answer: "Act out the phrase ‘brand style guide’ without speaking.", plusValue: 2, minusValue:  ""},
        { question: "", answer: "Hum a tune that represents a tech company (e.g., Intel’s jingle) without naming the brand.", plusValue: 3, minusValue: "" },
        { question: "", answer: "Sketch the Twitter logo without using text or the bird’s face.", plusValue: 1, minusValue: "" },
        { question: "", answer: "Explain the term ‘secondary brand colors’ without saying ‘secondary’ or ‘colors.’", plusValue: 2, minusValue: "" },
        { question: "", answer: "Describe ‘brand architecture’ without saying ‘brand’ or ‘structure.’", plusValue: 3, minusValue: "" },
        { question: "", answer: "Draw the Adidas logo using only geometric shapes, no text.", plusValue: 1, minusValue: "" },
        { question: "", answer: "Explain ‘typography’ without using the words ‘font’ or ‘text.’", plusValue: 2, minusValue: "" },
        { question: "", answer: "Draw the FedEx logo without using text or the hidden arrow.", plusValue: 1, minusValue:""  },
        { question: "", answer: "Describe the term ‘raster’ without using the words ‘pixel,’ ‘image,’ or ‘grid.’", plusValue: 2, minusValue: "" },
        { question: "", answer: "Hum the theme music of a popular fast-food chain without naming it.", plusValue: 3, minusValue:""  },
        { question: "", answer: "Act out the concept of ‘scalable’ without speaking or drawing.", plusValue: 2, minusValue:""  },
        { question: "", answer: "Sketch a concept for a wordmark for your favorite tech brand without using letters from their name.", plusValue: 1, minusValue: "" },
        { question: "", answer: "Draw the FedEx logo without using text or the hidden arrow.", plusValue: 1, minusValue: "" },
        { question: "", answer: "Describe the term ‘raster’ without using the words ‘pixel,’ ‘image,’ or ‘grid.’", plusValue: 2, minusValue: "" },
        { question: "", answer: "Hum the theme music of a popular fast-food chain without naming it.", plusValue: 3, minusValue:  ""},
        { question: "", answer: "Act out the concept of ‘scalable’ without speaking or drawing.", plusValue: 2, minusValue:""  },
        { question: "", answer: "Sketch a concept for a wordmark for your favorite tech brand without using letters from their name.", plusValue: 1, minusValue: "" },
    ],
    mcq: [
        { question: "What is the smallest unit of a digital image?a) Pixel/b) DPI/c) Raster/", answer: "a) Pixel", plusValue: 2, minusValue: -1 },
        { question: "Which file type can be scaled without losing quality?a) Raster File/b) Vector File/c) PPI/", answer: "b) Vector File", plusValue: 3, minusValue: -2 },
        { question: "Which term refers to the set of colors used in a brand’s design?a) Typography/b) Color Palette/c) Dynamic Logo/", answer: "b) Color Palette", plusValue: 2, minusValue: -1 },
        { question: "What is the term for legally protecting a brand’s logo or name?a) Trademark/b) Wordmark/c) Brand Architecture/", answer: "a) Trademark", plusValue: 3, minusValue: -2 },
        { question: "Which graphic becomes pixelated when enlarged?a) Vector/b) Raster/c) Scalable/", answer: "b) Raster", plusValue: 2, minusValue: 1 },
        { question: "Which term defines the visible elements of a brand?a) Brand Identity/b) Color Palette/c) Design Elements/", answer: "a) Brand Identity", plusValue: 2, minusValue: -1 },
        { question: "What is used to represent the smallest dots in a printed image?a) DPI/b) PPI/c) Pixel/", answer: "a) DPI", plusValue: 3, minusValue: 2 },
        { question: "What is a stylized text used for a brand name?a) Typography/b) Wordmark/c) Trademark/", answer: "b) Wordmark", plusValue: 2, minusValue: 1 },
        { question: "Which element refers to how brands relate within a company?a) Brand Architecture/b) Brand Identity/c) Primary Colors/", answer: "a) Brand Architecture", plusValue: 3, minusValue: -2 },
        { question: "What type of logo changes based on events or occasions?a) Static Logo/b) Dynamic Logo/c) Scalable Logo/", answer: "b) Dynamic Logo", plusValue: 2, minusValue: 0 },
        { question: "Which term describes additional brand colors that complement the main ones?a) Primary Colors/b) Secondary Colors/c) Tertiary Colors/", answer: "b) Secondary Colors", plusValue: 2, minusValue: -1 },
        { question: "What is used to ensure consistent fonts, colors, and visuals for a brand?a) Design System/b) Brand Style Guide/c) Typography/", answer: "b) Brand Style Guide", plusValue: 3, minusValue: -1 },
        { question: "Which file format is typically a raster graphic?a) .jpg/b) .svg/c) .pdf/", answer: "a) .jpg", plusValue: 2, minusValue: -1 },
        { question: "What type of graphic remains sharp no matter the size?a) Raster/b) Vector/c) Scalable/", answer: "b) Vector", plusValue: 3, minusValue: -2 },
        { question: "Which term defines the spacing, size, and style of text?a) Typography/b) Wordmark/c) Font/", answer: "a) Typography", plusValue: 2, minusValue: -1 },
        { question: "What color is typically associated with trust in branding?a) Red/b) Blue/c) Yellow/", answer: "b) Blue", plusValue: 3, minusValue: -2 },
        { question: "Which term refers to the role of each brand within an organization?a) Brand Architecture/b) Brand Identity/c) Brand Palette/", answer: "a) Brand Architecture", plusValue: 2, minusValue: -1 },
        { question: "What does PPI stand for?a) Pixels Per Inch/b) Points Per Inch/c) Pixels Per Image/", answer: "a) Pixels Per Inch", plusValue: 3, minusValue: -1 },
        { question: "What is the primary use of a trademark?a) To identify fonts/b) To protect brand elements/c) To define logos/", answer: "b) To protect brand elements", plusValue: 3, minusValue: -2 },
        { question: "What do secondary colors in branding allow for?a) Flexibility in campaigns/b) Consistency in design/c) Unique fonts/", answer: "a) Flexibility in campaigns", plusValue: 2, minusValue: -1 },
        { question: "Which file type is ideal for creating sharp, scalable graphics?a) Vector File/b) Raster File/c) Compressed File/", answer: "a) Vector File", plusValue: 3, minusValue: -2 },
        { question: "What is a color palette used for?a) Defining a brand’s colors/b) Printing designs/c) Enhancing typography/", answer: "a) Defining a brand’s colors", plusValue: 2, minusValue: -1 },
        { question: "What happens to a raster image when enlarged?a) Stays sharp/b) Becomes pixelated/c) Changes color/", answer: "b) Becomes pixelated", plusValue: 2, minusValue: -1 },
        { question: "What does DPI measure?a) Dots Per Image/b) Dots Per Inch/c) Density Per Inch/", answer: "b) Dots Per Inch", plusValue: 3, minusValue: 2 },
        { question: "What is the purpose of a brand style guide?a) To ensure consistent branding/b) To create logos/c) To define customer feedback/", answer: "a) To ensure consistent branding", plusValue: 3, minusValue: -1 },
    ],
    sabotage: [
        { question: "Their design software crashes mid-project! Force a player to roll the dice and move backward by the full value, skipping the activity where they land.", answer: "", plusValue:"" , minusValue:"" },
        { question: "You 'accidentally' overwrite their file! Send a player directly to the nearest Green (Luck) circle, making them deal with the randomness.", answer: "", plusValue: "", minusValue: "" },
        { question: "You report their brand as violating guidelines! Move a player backward 3 circles, but they skip the activity.", answer: "", plusValue: "" , minusValue: "" },
        { question: "You secretly switch their fonts! Target a player to skip their next turn entirely, as they 'fix' the issue.", answer: "", plusValue: "" , minusValue:"" },
        { question: "You leak their secondary color palette! Redirect the player to the previous Blue (Action) circle and make them deal with the fallout (play activity).", answer: "", plusValue:"" , minusValue:"" },
        { question: "Their client suddenly changes the brief! Force a player to roll the dice and move backward by half the value, skipping the activity where they land.", answer: "", plusValue:"" , minusValue: ""},
        { question: "You mess up their file export settings! Send a player directly to the nearest Green (Luck) circle, making them deal with the consequences.", answer: "", plusValue:"" , minusValue: ""},
        { question: "Their printer runs out of ink mid-presentation! Move a player backward 2 circles, skipping the activity.", answer: "", plusValue:"" , minusValue:"" },
        { question: "You introduce an error in their brand style guide! Force a player to skip their next turn as they 'fix' the issue.", answer: "", plusValue:"" , minusValue: ""},
        { question: "Their trademark application gets rejected! Redirect the player to the previous Orange (Duel) circle where they can challenge you.", answer: "", plusValue:"" , minusValue:"" },
        { question: "You spill coffee on their draft! Send a player backward 2 circles, skipping the activity.", answer: "", plusValue:"" , minusValue:"" },
        { question: "You share their design with a competitor! Force a player to roll again and move backward by the full value, skipping the activity.", answer: "", plusValue:"" , minusValue: ""},
        { question: "Their image file gets corrupted! Move a player backward 3 circles, skipping the activity.", answer: "", plusValue:"" , minusValue:"" },
        { question: "You upload an outdated version of their logo! Redirect the player to the nearest Green (Luck) circle.", answer: "", plusValue:"" , minusValue:"" },
        { question: "Their typography doesn’t pass client approval! Force a player to skip their next turn entirely.", answer: "", plusValue:"" , minusValue:"" },
        { question: "You accidentally delete their vector file! Move a player backward 1 circle, skipping the activity.", answer: "", plusValue:"" , minusValue: ""},
        { question: "You sabotage their print alignment! Send a player backward 2 circle, skipping the activity unless it's Blue (Action).", answer: "", plusValue:"" , minusValue: ""},
        { question: "You tamper with their DPI settings! Move a player to the previous Blue (Action) circle to resolve the issue (play activity).", answer: "", plusValue:"" , minusValue:"" },
        { question: "Their color palette file gets deleted! Force a player to roll, move backward by half the value and skip the activity where they land.", answer: "", plusValue:"" , minusValue:"" },
        { question: "You mislabel their layers in Illustrator! Move a player backward 2 circles, skipping the activity.", answer: "", plusValue:"" , minusValue:"" },
        { question: "Their logo mockup fails quality control! Redirect the player to the previous Orange (Duel) circle where they can challenge you.", answer: "", plusValue:"" , minusValue:"" },
        { question: "You insert a typo in their wordmark! Force a player to skip their next turn entirely.", answer: "", plusValue:"" , minusValue:"" },
        { question: "You delay their brand presentation with last-minute changes! Move a player backward 3 circles, skipping the activity.", answer: "", plusValue: "", minusValue: ""},
        { question: "You leak their dynamic logo design! Send the player backward 1 circle, skipping the activity.", answer: "", plusValue: "", minusValue:"" },
        { question: "Their design system faces a random bug! Redirect the player to the nearest Green (Luck) circle to deal with the randomness.", answer: "", plusValue:"" , minusValue:"" },
    ],
    // challenge: [
    //     { image: "../assets/dice.svg" },
    //     { image: "Relève ce défi et tu gagnes des points bonus." }
    // ]
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

// Fonction pour afficher une question aléatoire dans un modal ou iframe
function displayRandomQuestionInModal(category, iframeId) {
    const question = getRandomQuestion(category);

    // Trouver l'iframe pour injecter la question
    const iframe = document.getElementById(iframeId);

    // Injecter la question dans l'iframe
    iframe.contentWindow.postMessage({
        question: question.question,
        answer: question.answer,
        plusValue: question.plusValue,
        minusValue: question.minusValue,
        image: question.image
    }, "*");

    // Gérer l'affichage spécifique à la catégorie "mcq"
    const questionElement = document.getElementById('question');
    questionElement.innerHTML = ''; // Réinitialiser le contenu

    if (category === 'mcq') {
        // Extraire les options de la question
        const [mainQuestion, ...options] = question.question.split(' ');
        const ul = document.createElement('ul');

        options.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            ul.appendChild(li);
        });

        // Ajouter la question principale suivie des options
        questionElement.innerHTML = mainQuestion + ':';
        questionElement.appendChild(ul);
    } else {
        // Pour les autres catégories, afficher la question normalement
        questionElement.textContent = question.question;
    }

    // Mettre à jour les éléments question-number et question-number-minus avec les valeurs dynamiques
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
