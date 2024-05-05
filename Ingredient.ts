import * as THREE from 'three';

import Object from './Object';


export class Ingredient extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }


  update(delta: number) {

  }

  public async load (scene : THREE.Scene) {

  }
}

export class Steak extends Ingredient  {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/steak.glb", scene);
    this.object.scale.x = 10;
    this.object.scale.y = 10;
    this.object.scale.z = 10;
  }

  update(delta: number) {
  }
};

export class TopBun extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/topBun.glb", scene);
    this.object.scale.x = 5;
    this.object.scale.y = 5;
    this.object.scale.z = 5;
  }

  update(delta: number) {
  }
};

export class BottomBun extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/bottomBun.glb", scene);
    this.object.scale.x = 5;
    this.object.scale.y = 5;
    this.object.scale.z = 5;
  }

  update(delta: number) {
  }
};

export class Lettuce extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/lettuce.glb", scene);
    this.object.scale.x = 5;
    this.object.scale.y = 5;
    this.object.scale.z = 5;
  }

  update(delta: number) {
  }
};

export class Tomato extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/tomato.glb", scene);
    this.object.scale.x = 5;
    this.object.scale.y = 5;
    this.object.scale.z = 5;

  }

  update(delta: number) {
  }
};
