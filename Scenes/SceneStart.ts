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
    dt: number;
    constructor() {
        super("start");
        this.launch = false;
        this.objects = [];
        this.dt = 0;
    }

    launchAnimation() {
        this.launch = true;
    }

    update(dt: number, camera: THREE.PerspectiveCamera, sceneManager: SceneManager) {
        if (!this.launch)
            return;
        for (let object of this.objects) {
            object.update(dt);
        }
        this.dt += dt;
        if (this.dt >= 0.010) {
            if (camera.position.z > 8)
                camera.position.z -= 0.15;
            else if (camera.position.z < 8 && camera.position.z > 5) {
                this.lights[0].intensity -= 0.3;
                camera.position.z -= 0.1;
            } else {
                document.location.href = document.location.href + "cartel.html"
                camera.position.z = 10;
                camera.position.y = 2;
            }
            this.dt = 0;
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
