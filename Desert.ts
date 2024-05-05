import * as THREE from 'three';
import Object from './Object';
import exp from 'constants';

class Desert extends Object {
    constructor(position: THREE.BoxGeometry) {
        super(position);
    }

    update(delta: number) {
    }

    public async load(scene: THREE.Scene) {
        await super.loadModel("ressource/desert.glb", scene);
        this.object.rotation.y = 1.5;
        this.object.scale.x = 1.5;
        this.object.scale.y = 1.5;
        this.object.scale.z = 1.5;
        this.object.position.z = -10;
    }
}

export default Desert;
