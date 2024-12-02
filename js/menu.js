document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const menu = document.getElementById('menu');
    const closeIcon = document.getElementById('close-icon');
    const hamburgerIcon = document.getElementById('hamburger-icon');

    // Ajout de l'écouteur pour le bouton hamburger
    hamburgerButton.addEventListener('click', () => {
        // Bascule la classe active pour le menu
        menu.classList.toggle('active');

        // Affiche ou masque les icônes selon l'état du menu
        if (menu.classList.contains('active')) {
            closeIcon.style.display = 'block'; // Affiche la croix
            hamburgerIcon.style.display = 'none'; // Cache l'icône hamburger
        } else {
            closeIcon.style.display = 'none'; // Cache la croix
            hamburgerIcon.style.display = 'block'; // Affiche l'icône hamburger
        }
    });

    // Ajout de l'écouteur pour la croix pour fermer le menu
    closeIcon.addEventListener('click', () => {
        menu.classList.remove('active'); // Ferme le menu
        closeIcon.style.display = 'none'; // Cache la croix
        hamburgerIcon.style.display = 'block'; // Affiche l'icône hamburger
    });
});
