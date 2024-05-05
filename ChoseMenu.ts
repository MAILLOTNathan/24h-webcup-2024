import * as THREE from 'three';

import sceneComposer from "./Scenes/SceneComposer";
import Burger from "./Burger";

import { FrenchFries, BottomBun, TopBun, Steak, Tomato, Lettuce, Bread, Sausage, Cake } from "./Ingredient";

function frenchfries() {
    sceneComposer.removeIngredients();

    let frenchFriesModel = new FrenchFries(new THREE.BoxGeometry(0, 0, 0));
    frenchFriesModel.load(sceneComposer.scene).then(() => {
        sceneComposer.addIngredient(frenchFriesModel);
        frenchFriesModel.setPosition(0, 17, 0);
    });
    document.getElementById("MenuCard").style.display = "none";
    document.getElementById("frite").style.display = "block";
}

async function burger() {
    sceneComposer.removeIngredients();

    let burger = new Burger();
    const ingredients : any[] = [
        new BottomBun(new THREE.BoxGeometry(-8, 35, 4)),
        new Steak(new THREE.BoxGeometry(-8, 40, 4)),
        new Lettuce(new THREE.BoxGeometry(-8, 45, 4)),
        new Tomato(new THREE.BoxGeometry(-8, 50, 4)),
        new TopBun(new THREE.BoxGeometry(-8, 55, 4)),
    ];
    sceneComposer.setBurger(burger);

    for (let o of ingredients) {
        await o.load(sceneComposer.scene);
        sceneComposer.addIngredient(o);
    }

    document.getElementById("MenuCard").style.display = "none";
    document.getElementById("Burger").style.display = "block";
}

async function hotdog() {
    sceneComposer.removeIngredients();

    const ingredients : any[] = [
        new Bread(new THREE.BoxGeometry(0, 24, 0)),
        new Sausage(new THREE.BoxGeometry(0, 22, 0)),
    ]
    let i = 0;
    for (let o of ingredients) {
        await o.load(sceneComposer.scene);
        o.setPosition(0, 18 + i, 0);
        sceneComposer.addIngredient(o);
        i += 5;
    }
    document.getElementById("MenuCard").style.display = "none";
    document.getElementById("hotdog").style.display = "block";
}

function cake() {
    sceneComposer.removeIngredients();

    let cakeModel = new Cake(new THREE.BoxGeometry(0, 5, 0));
    cakeModel.load(sceneComposer.scene).then(() => {
        cakeModel.setPosition(0, 19, 0);
        sceneComposer.addIngredient(cakeModel);
    });
    document.getElementById("MenuCard").style.display = "none";
    document.getElementById("cake").style.display = "block";
}

function reset() {
    sceneComposer.removeIngredients();
    document.getElementById("frite").style.display = "none";
    document.getElementById("Burger").style.display = "none";
    document.getElementById("hotdog").style.display = "none";
    document.getElementById("cake").style.display = "none";
    document.getElementById("MenuCard").style.display = "";

}

window.frenchfries = frenchfries;
window.burger = burger;
window.hotdog = hotdog;
window.cake = cake;
window.reset = reset;
