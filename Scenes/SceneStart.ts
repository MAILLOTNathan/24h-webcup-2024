import AScene from "./AScene";
import Door from './../Door';
import * as THREE from 'three';
import SceneManager from './SceneManager';

class SceneStart extends AScene {
    constructor() {
        super("start");
        this.objects = [];
    }

    update(sceneManager: SceneManager) {
        for (let object of this.objects) {
            let dt = sceneManager.getClock().getDelta();
            object.update(dt);
        }
        console.log(this.camera.position);
        if (this.camera.position.z > 0)
            this.camera.position.z -= 0.01;
        else
            sceneManager.changeScene("menu");
    }
}

let sceneStart = new SceneStart();
const light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(2, 10, 10);
sceneStart.addLight(light);
const door = new Door(new THREE.BoxGeometry(1, 1, 1));
await door.load(sceneStart.getScene());
sceneStart.addObject(door);

export default sceneStart;
