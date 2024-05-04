import * as THREE from 'three';
import loadModel from './Loader';
import Object from './Object';

class Door extends Object {
  geometry: THREE.BoxGeometry;
  object: any;
  leftDoor : any;
  rightDoor : any;

  constructor(position: THREE.BoxGeometry) {
    super(position);
  }

  update() {
    if (this.leftDoor.rotation.y < 1.5 && this.rightDoor.rotation.y > -1.5) {
      this.leftDoor.rotation.y += 0.01;
      this.rightDoor.rotation.y -= 0.01;
    }
  }

  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/door.glb", scene);
    scene.remove(this.object);
    this.leftDoor = this.object.clone();
    this.rightDoor = this.object.clone();
    scene.add(this.leftDoor);
    scene.add(this.rightDoor);
    this.leftDoor.position.x = -1.5;
    this.rightDoor.position.x = 1.5;
  }
}

export default Door;