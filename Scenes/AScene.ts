import * as THREE from 'three';

import SceneManager from './SceneManager';
import Object from '../Object';

export default abstract class AScene {
    name: string;
    scene: THREE.Scene;
    lights: Array<THREE.DirectionalLight>;
    objects;

    constructor(name: string) {
        this.name = name;
        this.scene = new THREE.Scene();
        this.lights = [];
    }

    addLight(light: THREE.DirectionalLight) {
        this.lights.push(light);
        this.scene.add(light);
    }

    addObject(object: Object) {
        this.objects.push(object);
    }

    getScene() {
        return this.scene;
    }

    getName() {
        return this.name;
    }

    abstract update(camera: THREE.PerspectiveCamera, sceneManager: SceneManager);
}
