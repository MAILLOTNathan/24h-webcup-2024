import * as THREE from 'three';
import SceneManager from './SceneManager';
import Object from '../Object';

export default abstract class AScene {
    name: String;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    lights: Array<THREE.DirectionalLight>;
    objects;

    constructor(name: String) {
        this.name = name;
        this.scene = new THREE.Scene();
        this.lights = [];
    }

    setCamera(camera: THREE.PerspectiveCamera) {
        this.camera = camera;
        this.scene.add(camera);
    }

    addLight(light: THREE.DirectionalLight) {
        this.lights.push(light);
        this.scene.add(light);
    }

    addObject(object: Object) {
        this.objects.push(object);
        this.scene.add(object);
    }

    getScene() {
        return this.scene;
    }

    getName() {
        return this.name;
    }

    abstract update(sceneManager: SceneManager);
}
