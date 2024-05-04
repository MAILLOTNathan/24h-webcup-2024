import AScene from "./AScene";
import Door from './../Door';
import * as THREE from 'three';
import SceneManager from './SceneManager';

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
        if (camera.position.z > 0)
            camera.position.z -= 0.01;
        else {
            sceneManager.changeScene("composer");
            camera.position.z = 10;
        }
    }
}

let sceneStart = new SceneStart();
const light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(0, 10, 10);
sceneStart.addLight(light);
const door = new Door(new THREE.BoxGeometry(0, 1, 1));
await door.load(sceneStart.getScene());
sceneStart.addObject(door);

export default sceneStart;
