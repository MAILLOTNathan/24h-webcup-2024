import AScene from "./AScene";
import Door from './../Door';
import * as THREE from 'three';
import SceneManager from './SceneManager';

import Object from "../Object";

class Saloon extends Object {
    constructor(position: THREE.BoxGeometry) {
        super(position);
    }

    update(delta: number) {
    }

    public async load(scene: THREE.Scene) {
        await super.loadModel("ressource/saloon.glb", scene);
        this.object.scale.x = 2.3
        this.object.scale.y = 2.3
    }
}

class SceneStart extends AScene {
    launch: boolean;
    constructor() {
        super("start");
        this.launch = false;
        this.objects = [];
    }

    launchAnimation() {
        this.launch = true;
    }

    update(camera: THREE.PerspectiveCamera, sceneManager: SceneManager) {
        if (!this.launch)
            return;
        for (let object of this.objects) {
            let dt = sceneManager.getClock().getDelta();
            object.update(dt);
        }
        if (camera.position.z > 8)
            camera.position.z -= 0.15;
        else if (camera.position.z < 8 && camera.position.z > 5) {
            this.lights[0].intensity -= 0.3;
            // this.lights[0].position.x = 0;
            // this.lights[0].position.y = 0;
            // this.lights[0].position.z = camera.position.z - 1;
            camera.position.z -= 0.1;
        } else {
            sceneManager.changeScene("composer");
            camera.position.z = 10;
            camera.position.y = 2;
        }
    }
}

let sceneStart = new SceneStart();
const light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(0, 10, 10);
sceneStart.addLight(light);

const saloon = new Saloon(new THREE.BoxGeometry(0, 1, 1));
const door = new Door(new THREE.BoxGeometry(0, 10, 7));
const material = new THREE.MeshToonMaterial( { color: 0x292929 } );
const cube = new THREE.Mesh( new THREE.BoxGeometry( 6.2, 11, 1 ), material );
await door.load(sceneStart.getScene());
sceneStart.addObject(door);
cube.position.z = 1.5;
cube.position.y = 7;
await saloon.load(sceneStart.getScene());
sceneStart.scene.add(cube);

export default sceneStart;
