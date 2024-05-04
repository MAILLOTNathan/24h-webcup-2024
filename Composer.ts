import * as THREE from 'three';

import { Tomato, TopBun, BottomBun, Lettuce, Steak } from "./Ingredient";

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


export default async function Composer (scene : THREE.Scene) {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 1;

    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(2,10,10);
    scene.add(light);
    const ingredients : any[] = [
        new BottomBun(new THREE.BoxGeometry(0, 0, 0)),
        new Steak(new THREE.BoxGeometry(0, 2, 0)),
        new Lettuce(new THREE.BoxGeometry(0, 4, 0)),
        new Tomato(new THREE.BoxGeometry(0, 6, 0)),
        new TopBun(new THREE.BoxGeometry(0, 8, 0)),
    ];

    let index : any = 0.
    const geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const selector = new THREE.Mesh( geometry, material );
    selector.position.x = 3;
    obj.add(selector);
    scene.add( obj );

    document.addEventListener("keydown", onDocumentKeyDown, false);
    async function onDocumentKeyDown(event : KeyboardEvent) {
        var keyCode = event.key;
        ingredients[index].get().position.x = 0;
        ingredients[index].get().rotation.x = 0;
        if (keyCode == "ArrowUp") {
            index = index == ingredients.length - 1 ? 0 : index + 1;
        } else if (keyCode == "ArrowDown") {
            index = index == 0 ? ingredients.length - 1 : index - 1;
        }
        ingredients[index].get().position.x = 1;
    }

    async function load() {
        for (let index = 0; index < ingredients.length; index++) {
            await ingredients[index].load(scene);
        }
    }

    async function animate() {
        requestAnimationFrame(animate);
        await renderer.render(scene, camera);
        obj.position.y = ingredients[index].get().position.y;
        selector.rotation.x += 0.04;
	    selector.rotation.y += 0.04;
        ingredients[index].get().rotation.x = 0.8;
    }

    animate();
    await load();
    ingredients.forEach((item) => console.log(item.get()));
}