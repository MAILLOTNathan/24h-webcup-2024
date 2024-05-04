import * as THREE from 'three';
import Door from './Door';

import { Steak } from './Ingredient';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(0,10,10);
scene.add(light);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;
camera.position.y = 4;
scene.add(camera);
scene.add(light);

const door = new Door(new THREE.BoxGeometry(1, 2, 3));
const steak = new Steak(new THREE.BoxGeometry(3, 2, 1));
await steak.load(scene);
await door.load( scene);

function animate() {
    requestAnimationFrame(animate);
	door.update();
	camera.position.z -= 0.01;
    renderer.render(scene, camera);
}

animate();