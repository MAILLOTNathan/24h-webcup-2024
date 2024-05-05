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

    removeObjects() {
        for( var i = this.scene.children.length - 1; i >= 0; i--) {
            let obj = this.scene.children[i];
            this.scene.remove(obj);
       }
        this.objects = [];
    }

    removeObject(object: Object) {
        this.objects = this.objects.filter(obj => obj !== object);
    }

    abstract update(dt: number, camera: THREE.PerspectiveCamera, sceneManager: SceneManager);
}
