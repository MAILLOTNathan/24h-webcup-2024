import * as THREE from 'three';

import AScene from "./AScene";
import SceneManager from "./SceneManager";
import Object from '../Object';
import bar from '../Bar';

import { BottomBun, TopBun, Steak, Tomato, Lettuce, Ingredient } from '../Ingredient';

import Burger from '../Burger';

class SceneComposer extends AScene {
    index : any;
    ingredients : Ingredient[];
    burger : Burger;

    constructor() {
        super("composer");
        this.objects = [];
        this.ingredients = [];
        this.index = 0;
    }

    update(dt: number, camera: THREE.PerspectiveCamera, sceneManager: SceneManager) {
        camera.position.z = 20;
        camera.position.y = 25;
        camera.rotation.x = 0;
    }

    addIngredient(ingredient: Ingredient) {
        super.addObject(ingredient);
        this.ingredients.push(ingredient);
    }

    async addToBurger () {
        let newIngredient : Ingredient;
        const current = this.ingredients[this.index];

        if (current instanceof Steak) {
            newIngredient = new Steak(current.geometry);
        } else if (current instanceof BottomBun) {
            newIngredient = new BottomBun(current.geometry);
        } else if (current instanceof TopBun) {
            newIngredient = new TopBun(current.geometry);
        } else if (current instanceof Tomato) {
            newIngredient = new Tomato(current.geometry);
        } else if (current instanceof Lettuce) {
            newIngredient = new Lettuce(current.geometry);
        } else {
            throw new Error("Ingredient not found");
        }
        await newIngredient.load(this.scene);
        newIngredient.get().rotation.x = 0;
        this.addObject(newIngredient);
        this.burger.addIngredient(newIngredient);
    }

    removeBurger() {
        const poped = this.burger.removeIngredient();

        if (!poped)
            return;
        this.scene.remove(poped.get());
    }

    setBurger (burger : Burger) {
        this.burger = burger;
    }

};

let sceneComposer = new SceneComposer();
let light = new THREE.DirectionalLight(0xffffff, 1);
let bar1= new bar(new THREE.BoxGeometry(0, 0, 0));
let burger = new Burger();
const ingredients : any[] = [
    new BottomBun(new THREE.BoxGeometry(-8, 35, 4)),
    new Steak(new THREE.BoxGeometry(-8, 40, 4)),
    new Lettuce(new THREE.BoxGeometry(-8, 45, 4)),
    new Tomato(new THREE.BoxGeometry(-8, 50, 4)),
    new TopBun(new THREE.BoxGeometry(-8, 55, 4)),
];

sceneComposer.setBurger(burger);

await bar1.load(sceneComposer.scene);
sceneComposer.addObject(bar1);
for (let o of ingredients) {
    await o.load(sceneComposer.scene);
    sceneComposer.addIngredient(o);
}

light.position.set(0, 10, 13);
sceneComposer.addLight(light);
export default sceneComposer;
