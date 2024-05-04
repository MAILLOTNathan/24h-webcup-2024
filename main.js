import * as THREE from 'three';
import SceneManager from './Scenes/SceneManager';
import sceneStart from './Scenes/SceneStart';
import sceneComposer from './Scenes/SceneComposer';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;
camera.position.y = 7;
const sceneManager = new SceneManager(camera);
sceneManager.addScene(sceneStart);
sceneManager.addScene(sceneComposer);
sceneManager.changeScene("composer");

function onDocumentKeyDown(event) {
    var keyCode = event.key;
    sceneComposer.ingredients[sceneComposer.index].get().rotation.x = 0.5;
    if (keyCode == "ArrowUp") {
        sceneComposer.index = sceneComposer.index == sceneComposer.ingredients.length - 1 ? 0 : sceneComposer.index + 1;
    } else if (keyCode == "ArrowDown") {
        sceneComposer.index = sceneComposer.index == 0 ? sceneComposer.ingredients.length - 1 : sceneComposer.index - 1;
    }
    sceneComposer.ingredients[sceneComposer.index].get().position.x = 1;
}

function launchAnimation(event) {
    if (event.key == "Enter" || event.type == "touchend") {
        sceneStart.launchAnimation();
    }

}
document.addEventListener("touchend", launchAnimation, false);
document.addEventListener("keypress", launchAnimation, false);
document.addEventListener("keydown", onDocumentKeyDown, false);
function animate() {
    let dt = sceneManager.getClock().getDelta();
    requestAnimationFrame(animate);
    sceneManager.update(dt);
    renderer.render(sceneManager.getCurrentScene().getScene(), camera);
}

animate();
