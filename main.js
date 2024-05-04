import * as THREE from 'three';
import SceneManager from './Scenes/SceneManager';
import sceneStart from './Scenes/SceneStart';
import sceneComposer from './Scenes/SceneComposer';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 25;
camera.position.y = -5;
camera.rotateX(0.5);
const sceneManager = new SceneManager(camera);
sceneManager.addScene(sceneStart);
sceneManager.addScene(sceneComposer);
sceneManager.changeScene("composer");

console.log(sceneManager.scenes)
function onDocumentKeyDown(event) {
    var keyCode = event.key;
    console.log(sceneComposer.ingredients);
    sceneComposer.ingredients[sceneComposer.index].get().position.x = 0;
    sceneComposer.ingredients[sceneComposer.index].get().rotation.x = 0;
    if (keyCode == "ArrowUp") {
        sceneComposer.index = sceneComposer.index == sceneComposer.ingredients.length - 1 ? 0 : sceneComposer.index + 1;
    } else if (keyCode == "ArrowDown") {
        sceneComposer.index = sceneComposer.index == 0 ? sceneComposer.ingredients.length - 1 : sceneComposer.index - 1;
    }
    sceneComposer.ingredients[sceneComposer.index].get().position.x = 1;
}

function launchAnimation(event) {
    console.log(event);
    if (event.key == "Enter" || event.type == "touchend") {
        sceneStart.launchAnimation();
    }

}
document.addEventListener("touchend", launchAnimation, false);
document.addEventListener("keypress", launchAnimation, false);
document.addEventListener("keydown", onDocumentKeyDown, false);
function animate() {
    requestAnimationFrame(animate);
    sceneManager.update();
    // console.log(sceneManager.getCurrentScene().getScene())
    renderer.render(sceneManager.getCurrentScene().getScene(), camera);
}

animate();
