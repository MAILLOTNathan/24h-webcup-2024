import * as THREE from 'three';
import Object from './Object';

class bar extends Object {
    constructor(position: THREE.BoxGeometry) {
        super(position);
    }

    public async load(scene: THREE.Scene) {
        await super.loadModel("ressource/bar.glb", scene);
        this.object.position.z = -10;
        this.object.position.y = 4;
        this.object.rotation.y = 0
        this.object.rotation.x = 0
        this.object.rotation.z = 0
    }

    update(delta: number) {
    }
}

export default bar;
