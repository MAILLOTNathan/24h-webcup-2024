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
        this.scene.background = new THREE.Color(0xe69138);
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

    removeIngredients() {
        if (this.burger !== undefined) {
            while (this.burger.ingredients.length > 0) {
                let o = this.burger.removeIngredient();
                this.scene.remove(o.get());
                super.removeObject(o);
            }
        }
        for (let o of this.ingredients) {
            this.scene.remove(o.get());
            super.removeObject(o);
        }
        this.ingredients = [];
    }

};

let sceneComposer = new SceneComposer();
let light = new THREE.DirectionalLight(0xf8a966, 2);
let bar1= new bar(new THREE.BoxGeometry(10, 10, 0));

bar1.load(sceneComposer.scene).then(() => {
    sceneComposer.addObject(bar1);
});
light.position.set(0, 10, 13);
sceneComposer.addLight(light);
export default sceneComposer;
