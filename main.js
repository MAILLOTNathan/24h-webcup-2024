import * as THREE from 'three';
import SceneManager from './Scenes/SceneManager';
import sceneStart from './Scenes/SceneStart';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 3.5;
const sceneManager = new SceneManager(camera);
sceneManager.addScene(sceneStart);
sceneManager.changeScene("start");


function animate() {
    requestAnimationFrame(animate);
    sceneManager.update();
    renderer.render(sceneManager.getCurrentScene().getScene(), camera);
}

animate();
