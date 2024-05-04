import * as THREE from 'three';
import SceneManager from './Scenes/SceneManager';
import sceneStart from './Scenes/SceneStart';
import sceneComposer from './Scenes/SceneComposer';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 3.5;
const sceneManager = new SceneManager(camera);
sceneManager.addScene(sceneStart);
sceneManager.addScene(sceneComposer);
sceneManager.changeScene("start");


function onDocumentKeyDown(event) {
    console.log(sceneComposer.objects);
    var keyCode = event.key;
    sceneComposer.objects[sceneComposer.index].get().position.x = 0;
    sceneComposer.objects[sceneComposer.index].get().rotation.x = 0;
    if (keyCode == "ArrowUp") {
        sceneComposer.index = sceneComposer.index == sceneComposer.objects.length - 1 ? 0 : sceneComposer.index + 1;
    } else if (keyCode == "ArrowDown") {
        sceneComposer.index = sceneComposer.index == 0 ? sceneComposer.objects.length - 1 : sceneComposer.index - 1;
    }
    sceneComposer.objects[sceneComposer.index].get().position.x = 1;
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function animate() {
    requestAnimationFrame(animate);
    sceneManager.update();
    renderer.render(sceneManager.getCurrentScene().getScene(), camera);
}

animate();
