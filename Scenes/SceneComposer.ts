import * as THREE from 'three';

import AScene from "./AScene";
import SceneManager from "./SceneManager";
import Object from '../Object';
import bar from '../Bar';

import { Ingredient, BottomBun, TopBun, Steak, Tomato, Lettuce } from '../Ingredient';

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
        camera.position.z = 25;
        camera.position.y = -5;
        camera.rotation.x = 0.5;
    }

    addIngredient(ingredient: Object) {
        super.addObject(ingredient);
        this.ingredients.push(ingredient);
    }

    removeIngredients() {

        for (let o of this.ingredients) {
            this.scene.remove(o.get());
            super.removeObject(o);
        }
        this.ingredients = [];
    }

};

let sceneComposer = new SceneComposer();
let light = new THREE.DirectionalLight(0xffffff, 1);
let bar1= new bar(new THREE.BoxGeometry(0, 0, 0));


await bar1.load(sceneComposer.scene);
sceneComposer.addObject(bar1);
bar1.get().rotation.x = 0.8;

light.position.set(0, 10, 13);
sceneComposer.addLight(light);
export default sceneComposer;
