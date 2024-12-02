const canvasContainer = document.getElementById('canvas-container');
const rollButton = document.getElementById('roll-button');

// Création de la scène et de la caméra
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // Fond blanc
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(400, 400);
canvasContainer.appendChild(renderer.domElement);

// Suivi du chargement des textures
let texturesLoaded = 0;
const totalTextures = 6; // Nombre total de textures

// Fonction pour charger une texture d'image
function loadTexture(imagePath) {
    const loader = new THREE.TextureLoader();
    return loader.load(
        imagePath,
        (texture) => {
            console.log(`Image chargée : ${imagePath}`);
            texturesLoaded++; // Incrémenter quand une texture est chargée
            if (texturesLoaded === totalTextures) {
                console.log("Toutes les textures sont chargées !");
                renderer.render(scene, camera); // Rendu initial une fois les textures chargées
            }
        },
        undefined, // Progression
        (err) => console.error(`Erreur de chargement pour : ${imagePath}`, err) // Erreur
    );
}

// Charger les textures des faces
const materials = [
    new THREE.MeshBasicMaterial({ map: loadTexture('assets/face1.png') }), // Face 1
    new THREE.MeshBasicMaterial({ map: loadTexture('assets/face2.png') }), // Face 2
    new THREE.MeshBasicMaterial({ map: loadTexture('assets/face3.png') }), // Face 3
    new THREE.MeshBasicMaterial({ map: loadTexture('assets/face4.png') }), // Face 4
    new THREE.MeshBasicMaterial({ map: loadTexture('assets/face5.png') }), // Face 5
    new THREE.MeshBasicMaterial({ map: loadTexture('assets/face6.png') })  // Face 6
];

// Création de la géométrie du dé
const geometry = new THREE.BoxGeometry();
const dice = new THREE.Mesh(geometry, materials);
scene.add(dice);

// Position de la caméra
camera.position.z = 3;

// Ajout d'un effet de bordure avec un cube Wireframe
const edgeGeometry = new THREE.EdgesGeometry(geometry);
const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
scene.add(edges);

// Définitions des rotations pour chaque face
const faceRotations = [
    { x: 0, y: 0, z: 0 },                    // Face 1
    { x: Math.PI, y: 0, z: 0 },              // Face 2
    { x: -Math.PI / 2, y: 0, z: 0 },         // Face 3
    { x: Math.PI / 2, y: 0, z: 0 },          // Face 4
    { x: 0, y: -Math.PI / 2, z: Math.PI },   // Face 5
    { x: 0, y: Math.PI / 2, z: Math.PI }     // Face 6
];

// Fonction pour lancer le dé
function rollDice() {
    const result = Math.floor(Math.random() * 6); // Face aléatoire
    const targetRotation = faceRotations[result];

    // Ajout de rotations aléatoires pour simuler un lancer réaliste
    const extraRotations = {
        x: Math.PI * (Math.floor(Math.random() * 4) + 2), // Entre 2 et 5 tours complets
        y: Math.PI * (Math.floor(Math.random() * 4) + 2),
        z: Math.PI * (Math.floor(Math.random() * 4))      // Rotation Z pour plus de réalisme
    };

    // Calcul des rotations finales
    const xRotation = extraRotations.x + targetRotation.x;
    const yRotation = extraRotations.y + targetRotation.y;
    const zRotation = extraRotations.z + targetRotation.z;

    const duration = 1000; // Durée de l'animation en ms
    const startTime = performance.now();

    // Animation
    function animate(time) {
        const elapsedTime = time - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        dice.rotation.x = progress * xRotation;
        dice.rotation.y = progress * yRotation;
        dice.rotation.z = progress * zRotation;

        edges.rotation.copy(dice.rotation); // Synchroniser les rotations des bordures

        renderer.render(scene, camera);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            console.log(`Résultat du lancer : ${result + 1}`);
        }
    }

    requestAnimationFrame(animate);
}

// Lancer le dé lors du clic sur le bouton
rollButton.addEventListener('click', rollDice);
