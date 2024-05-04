import * as THREE from 'three';
import loadModel from './Loader';

export default abstract class Object {
    geometry : THREE.BoxGeometry;
    object : any;

    constructor(position : THREE.BoxGeometry) {
      this.geometry = position;
      this.object = null;
    }

    public async loadModel(modelPath: string, scene : THREE.Scene) {
      this.object = await loadModel(modelPath, scene);
      this.setPosition(this.geometry.parameters.width / 2, this.geometry.parameters.height / 2, this.geometry.parameters.depth / 2);
    }

    setPosition(x : number, y : number, z : number) {
      this.object.position.set(x, y, z);
    }

    rotate(x : number, y : number, z : number) {
      this.object.rotation.set(x, y, z);
    }

    get() {
      return this.object;
    }

    abstract update(delta: number);
}
