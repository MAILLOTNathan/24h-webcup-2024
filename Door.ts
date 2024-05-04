import * as THREE from 'three';
import Object from './Object';

class Door extends Object {
  geometry: THREE.BoxGeometry;
  object: any;
  leftDoor : any;
  rightDoor : any;
  dt: number = 0;

  constructor(position: THREE.BoxGeometry) {
    super(position);
    this.dt = 0;
  }

  update(delta: number) {
    this.dt += delta;
    if (this.dt >= 0.010) {
      if (this.leftDoor.rotation.y < 1.5 && this.rightDoor.rotation.y > -1.5) {
        console.log(this.leftDoor.rotation);
        this.leftDoor.rotation.y += 0.01;
        this.rightDoor.rotation.y -= 0.01;
      }
      this.dt = 0;
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
    this.rightDoor.scale.y = 1.5;
    this.leftDoor.scale.y = 1.5;
  }
}

export default Door;
