import * as THREE from 'three';

import Object from './Object';

export class Steak extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/steak.glb", scene);
    this.object.scale.x = 2;
    this.object.scale.y = 2;
    this.object.scale.z = 2;
  }
};

export class TopBun extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/topBun.glb", scene);
  }
};

export class BottomBun extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/bottomBun.glb", scene);
  }
};

export class Lettuce extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/lettuce.glb", scene);
  }
};

export class Tomato extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/tomato.glb", scene);
  }
};
