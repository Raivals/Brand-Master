// TRY WITH COLOR DICE ROLL 

// const canvasContainer = document.getElementById('canvas-container');
// const rollButton = document.getElementById('roll-button');

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(400, 400);
// canvasContainer.appendChild(renderer.domElement);

// // Change background to white
// renderer.setClearColor(0xffffff, 1); // White background

// const materials = [
//     new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Rouge (Face 1)
//     new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Vert (Face 2)
//     new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Bleu (Face 3)
//     new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Jaune (Face 4)
//     new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta (Face 5)
//     new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cyan (Face 6)
// ];

// // Cube geometry for the dice
// const geometry = new THREE.BoxGeometry();

// // Add the dice mesh (cube)
// const dice = new THREE.Mesh(geometry, materials);

// // Create the wireframe for the borders (edges of the dice)
// const edges = new THREE.EdgesGeometry(geometry); // Get the edges of the geometry
// const lineMaterial = new THREE.LineBasicMaterial({
//     color: 0x000000, // Black for the edges
//     linewidth: 2, // Thickness of the edges
// });
// const line = new THREE.LineSegments(edges, lineMaterial); // Create a line mesh for edges

// scene.add(dice);
// scene.add(line); // Add the wireframe lines to the scene

// camera.position.z = 3;

// const faceRotations = [
//     { x: 0, y: 0 },                   // Face 1
//     { x: Math.PI, y: 0 },             // Face 2
//     { x: -Math.PI / 2, y: 0 },        // Face 3
//     { x: Math.PI / 2, y: 0 },         // Face 4
//     { x: 0, y: -Math.PI / 2 },        // Face 5
//     { x: 0, y: Math.PI / 2 }          // Face 6
// ];

// function rollDice() {
//     const result = Math.floor(Math.random() * 6);
//     const targetRotation = faceRotations[result];

//     const extraRotations = {
//         x: Math.PI * (Math.floor(Math.random() * 4) + 2),
//         y: Math.PI * (Math.floor(Math.random() * 4) + 2)
//     };

//     const xRotation = extraRotations.x + targetRotation.x;
//     const yRotation = extraRotations.y + targetRotation.y;

//     const duration = 1000;
//     const startTime = performance.now();

//     function animate(time) {
//         const elapsedTime = time - startTime;
//         const progress = Math.min(elapsedTime / duration, 1);

//         dice.rotation.x = progress * xRotation;
//         dice.rotation.y = progress * yRotation;
//         line.rotation.x = progress * xRotation;
//         line.rotation.y = progress * yRotation; // Ensure wireframe rotates with the dice

//         renderer.render(scene, camera);

//         if (progress < 1) {
//             requestAnimationFrame(animate);
//         } else {
//             console.log(`Résultat du lancer : ${result + 1}`);
//         }
//     }

//     requestAnimationFrame(animate);
// }

// rollButton.addEventListener('click', rollDice);

// renderer.render(scene, camera);



// TRY WITH DICE ROLL NUM

const canvasContainer = document.getElementById('canvas-container');
const rollButton = document.getElementById('roll-button');

// Création de la scène et de la caméra
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // Fond blanc
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(400, 400);
canvasContainer.appendChild(renderer.domElement);

// Fonction pour créer une texture contenant un numéro avec une bordure
function createTextTexture(number) {
    const canvas = document.createElement('canvas');
    canvas.width = 256; // Taille de la texture
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Fond blanc avec bordure noire
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Texte noir
    ctx.fillStyle = 'black';
    ctx.font = '100px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(number, canvas.width / 2, canvas.height / 2);

    return new THREE.CanvasTexture(canvas);
}

// Création des matériaux avec des textures inversées
const materials = [
    new THREE.MeshBasicMaterial({ map: createTextTexture(6) }), // Face 1
    new THREE.MeshBasicMaterial({ map: createTextTexture(5) }), // Face 2
    new THREE.MeshBasicMaterial({ map: createTextTexture(4) }), // Face 3
    new THREE.MeshBasicMaterial({ map: createTextTexture(3) }), // Face 4
    new THREE.MeshBasicMaterial({ map: createTextTexture(2) }), // Face 5
    new THREE.MeshBasicMaterial({ map: createTextTexture(1) })  // Face 6
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

// Définitions des rotations pour chaque face (sans modification)
const faceRotations = [
    { x: 0, y: 0 },                   // Face 1
    { x: Math.PI, y: 0 },             // Face 2
    { x: -Math.PI / 2, y: 0 },        // Face 3
    { x: Math.PI / 2, y: 0 },         // Face 4
    { x: 0, y: -Math.PI / 2 },        // Face 5
    { x: 0, y: Math.PI / 2 }          // Face 6
];

// Fonction pour lancer le dé
function rollDice() {
    const result = Math.floor(Math.random() * 6);
    const targetRotation = faceRotations[result];

    // Ajouter des rotations supplémentaires aléatoires
    const extraRotations = {
        x: Math.PI * (Math.floor(Math.random() * 4) + 2),
        y: Math.PI * (Math.floor(Math.random() * 4) + 2)
    };

    const xRotation = extraRotations.x + targetRotation.x;
    const yRotation = extraRotations.y + targetRotation.y;

    const duration = 1000; // Durée de l'animation en ms
    const startTime = performance.now();

    // Animation
    function animate(time) {
        const elapsedTime = time - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        dice.rotation.x = progress * xRotation;
        dice.rotation.y = progress * yRotation;

        edges.rotation.copy(dice.rotation); // Synchroniser les rotations des bordures

        renderer.render(scene, camera);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            console.log(`Résultat du lancer : ${6 - result}`); // Correction pour correspondre à l'inversion
        }
    }

    requestAnimationFrame(animate);
}

// Lancer le dé lors du clic sur le bouton
rollButton.addEventListener('click', rollDice);

// Rendu initial
renderer.render(scene, camera);
