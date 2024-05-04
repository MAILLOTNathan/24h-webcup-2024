import * as THREE from 'three';

import Object from './Object';

export abstract class Ingredient extends Object {
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

export class FrenchFries extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/french_fries.glb", scene);
    this.object.scale.x = 5;
    this.object.scale.y = 5;
    this.object.scale.z = 5;
  }

  update(delta: number) {
  }
}

export class Bread extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/bread.glb", scene);
    this.object.scale.x = 10;
    this.object.scale.y = 10;
    this.object.scale.z = 10;
  }

  update(delta: number) {
  }
}

export class Sausage extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/sausage.glb", scene);
    this.object.rotation.y = 1.5708
  }

  update(delta: number) {
  }
}

export class Cake extends Object {
  constructor(position : THREE.BoxGeometry) {
    super(position);
  }
  public async load(scene: THREE.Scene) {
    await super.loadModel("ressource/cake.glb", scene);
  }

  update(delta: number) {
  }
}
