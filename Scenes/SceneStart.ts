import AScene from "./AScene";
import Door from './../Door';
import * as THREE from 'three';
import SceneManager from './SceneManager';
import Desert from "../Desert";

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
        this.scene.background = new THREE.Color(0x082f54);
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
                console.log(document.location.href.includes("index"))
                if (document.location.href.includes("index"))
                    document.location.href = document.location.href.replace("index", "carte");
                else
                    document.location.href = document.location.href + "carte.html";
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
const desert = new Desert(new THREE.BoxGeometry(0, 1, 1));
const door = new Door(new THREE.BoxGeometry(0, 10, 7));
const material = new THREE.MeshToonMaterial( { color: 0x292929 } );
const cube = new THREE.Mesh( new THREE.BoxGeometry( 6.2, 11, 1 ), material );
door.load(sceneStart.getScene()).then(() => {
    sceneStart.addObject(door);
});
desert.load(sceneStart.getScene()).then(() => {
    sceneStart.addObject(desert);
});
desert.load(sceneStart.getScene()).then(() => {
    sceneStart.addObject(desert);
});
cube.position.z = 1.5;
cube.position.y = 7;
saloon.load(sceneStart.getScene()).then(() => {
    sceneStart.addObject(saloon);
});
sceneStart.scene.add(cube);

export default sceneStart;
