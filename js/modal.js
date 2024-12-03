// Fonction pour afficher un modal spécifique
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Fonction pour fermer tous les modals
function closeModal() {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = "none";
    });
}

// Ajouter un événement pour chaque lien de catégorie
document.getElementById("riddle-link").onclick = function (event) {
    event.preventDefault();
    openModal("riddle-modal");
};
document.getElementById("bonus-malus-link").onclick = function (event) {
    event.preventDefault();
    openModal("bonus-malus-modal");
};
document.getElementById("action-link").onclick = function (event) {
    event.preventDefault();
    openModal("action-modal");
};
document.getElementById("mcq-link").onclick = function (event) {
    event.preventDefault();
    openModal("mcq-modal");
};
document.getElementById("sabotage-link").onclick = function (event) {
    event.preventDefault();
    openModal("sabotage-modal");
};
document.getElementById("challenge-link").onclick = function (event) {
    event.preventDefault();
    openModal("challenge-modal");
};

// Fermeture des modals
var closeBtns = document.querySelectorAll(".close");
closeBtns.forEach(function (btn) {
    btn.onclick = closeModal;
});

// Fermer le modal si l'utilisateur clique en dehors du contenu
window.onclick = function (event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function (modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};