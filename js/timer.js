// Références aux éléments
const timerLink = document.getElementById('timer-link');
const timerModal = document.getElementById('timer-modal');
const closeTimerModal = document.getElementById('close-timer-modal');
const start1MinButton = document.getElementById('start-1min');
const start2MinButton = document.getElementById('start-2min');
const timerDisplay = document.getElementById('timer-display');

let timerInterval; // Stocker l'intervalle actif

// Ouvrir le modal du chronomètre
timerLink.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    timerModal.style.display = 'flex';
});

// Démarrer le chronomètre
function startTimer(duration) {
    clearInterval(timerInterval); // Réinitialise tout timer actif
    let timeRemaining = duration;

    // Met à jour l'affichage toutes les secondes
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
        }

        timeRemaining--;
    }, 1000);
}

// Gérer les boutons du chronomètre
start1MinButton.addEventListener('click', () => startTimer(60)); // Chrono 1 minute
start2MinButton.addEventListener('click', () => startTimer(120)); // Chrono 2 minutes

// Fermer le modal
closeTimerModal.addEventListener('click', () => {
    clearInterval(timerInterval); // Arrête le timer
    timerModal.style.display = 'none';
    timerDisplay.textContent = '00:00'; // Réinitialise l'affichage
});

// Fermer le modal en cliquant à l'extérieur du contenu
window.addEventListener('click', (e) => {
    if (e.target === timerModal) {
        clearInterval(timerInterval);
        timerModal.style.display = 'none';
        timerDisplay.textContent = '00:00';
    }
});
