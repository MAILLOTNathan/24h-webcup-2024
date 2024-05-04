import * as THREE from 'three';

import AScene from "./AScene";
import SceneManager from "./SceneManager";
import Object from '../Object';
import bar from '../Bar';

import { BottomBun, TopBun, Steak, Tomato, Lettuce } from '../Ingredient';

class SceneComposer extends AScene {
    index : any;
    ingredients : Object[];

    constructor() {
        super("composer");
        this.objects = [];
        this.ingredients = [];
        this.index = 0;
    }

    update(dt: number, camera: THREE.PerspectiveCamera, sceneManager: SceneManager) {
        this.objects[this.index].get().rotation.x = 0.8;
        camera.position.z = 25;
        camera.position.y = -5;
        camera.rotation.x = 0.5;

    }

    addIngredient(ingredient: Object) {
        super.addObject(ingredient);
        this.ingredients.push(ingredient);
    }

};

let sceneComposer = new SceneComposer();
let light = new THREE.DirectionalLight(0xffffff, 1);
let bar1= new bar(new THREE.BoxGeometry(0, 0, 0));
const ingredients : any[] = [
    new BottomBun(new THREE.BoxGeometry(0, 0, 0)),
    new Steak(new THREE.BoxGeometry(0, 5, 0)),
    new Lettuce(new THREE.BoxGeometry(0, 10, 0)),
    new Tomato(new THREE.BoxGeometry(0, 15, 0)),
    new TopBun(new THREE.BoxGeometry(0, 20, 0)),
];


await bar1.load(sceneComposer.scene);
sceneComposer.addObject(bar1);
for (let o of ingredients) {
    await o.load(sceneComposer.scene);
    sceneComposer.addIngredient(o);
}

light.position.set(0, 10, 13);
sceneComposer.addLight(light);
export default sceneComposer;
