import * as THREE from 'three';
import Object from './Object';
import { PI } from 'three/examples/jsm/nodes/Nodes.js';

class bar extends Object {
    constructor(position: THREE.BoxGeometry) {
        super(position);
    }

    public async load(scene: THREE.Scene) {
        await super.loadModel("ressource/bar.glb", scene);
        this.object.position.z = -20;
        this.object.position.y = 20;
        this.object.position.x = 0;
        this.object.rotation.y = 3.14;
        this.object.rotation.x = 0;
        this.object.rotation.z = 0;
        this.object.scale.x = 7;
        this.object.scale.y = 7;
        this.object.scale.z = 7;
    }

    update(delta: number) {
    }
}

export default bar;
