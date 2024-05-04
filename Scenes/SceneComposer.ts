import * as THREE from 'three';

import AScene from "./AScene";
import SceneManager from "./SceneManager";
import Object from '../Object';
import bar from '../Bar';

import { BottomBun, TopBun, Steak, Tomato, Lettuce } from '../Ingredient';

class Selector extends Object {
    constructor(position: THREE.BoxGeometry) {
        super(position);
        const geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.object = new THREE.Mesh( geometry, material );
    }

    update(delta: number) {
        this.object.position.x = 3;
        this.object.rotation.x += 0.04;
	    this.object.rotation.y += 0.04;
    }
}

class SceneComposer extends AScene {
    index : any;
    selector : Selector;
    ingredients : Object[];

    constructor() {
        super("composer");
        this.objects = [];
        this.ingredients = [];
        this.index = 0;
    }

    update(dt: number, camera: THREE.PerspectiveCamera, sceneManager: SceneManager) {
        this.selector.get().position.y = this.objects[this.index].get().position.y;
        this.objects[this.index].get().rotation.x = 0.8;
        this.selector.update(sceneManager.dt.getDelta());
        camera.position.z = 25;
        camera.position.y = -5;
        camera.rotation.x = 0.5;

    }

    addIngredient(ingredient: Object) {
        super.addObject(ingredient);
        this.ingredients.push(ingredient);
    }

    setSelector (selector: Selector) {
        this.selector = selector;
        this.scene.add(selector.get());

    }
};

let sceneComposer = new SceneComposer();
let light = new THREE.DirectionalLight(0xffffff, 1);
let selector = new Selector(new THREE.BoxGeometry(0,0,0));
let bar1= new bar(new THREE.BoxGeometry(0, 0, 0));
const ingredients : any[] = [
    new BottomBun(new THREE.BoxGeometry(0, 0, 0)),
    new Steak(new THREE.BoxGeometry(0, 2, 0)),
    new Lettuce(new THREE.BoxGeometry(0, 4, 0)),
    new Tomato(new THREE.BoxGeometry(0, 6, 0)),
    new TopBun(new THREE.BoxGeometry(0, 8, 0)),
];

sceneComposer.setSelector(selector);

await bar1.load(sceneComposer.scene);
sceneComposer.addObject(bar1);
for (let o of ingredients) {
    await o.load(sceneComposer.scene);
    sceneComposer.addIngredient(o);
}

light.position.set(2, 10, 500);
sceneComposer.addLight(light);
export default sceneComposer;
