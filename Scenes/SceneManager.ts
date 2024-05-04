import * as THREE from 'three';
import AScene from './AScene';
import { Clock } from 'three/src/Three.js';


export default class SceneManager {
    currentScene: String;
    scenes: Map<String, AScene>;
    dt: Clock;
    camera: THREE.PerspectiveCamera;

    constructor(camera: THREE.PerspectiveCamera) {
        this.currentScene = "";
        this.scenes = new Map<String, AScene>();
        this.dt = new Clock(true);
        this.camera = camera;
    }

    addScene(scene: AScene) {
        // scene.setCamera(this.camera);
        this.scenes.set(scene.getName(), scene);
    }

    changeScene(name: string) {
        this.currentScene = name;
    }

    getScene(name: string) {
        return this.scenes.get(name);
    }

    getClock() {
        return this.dt;
    }

    getCurrentScene() {
        let res = this.scenes.get(this.currentScene);
        if (res == undefined) {
            throw new Error("Scene not found");
        }
        return res;
    }

    update() {
        this.getCurrentScene().update(this.camera, this);
    }
}
