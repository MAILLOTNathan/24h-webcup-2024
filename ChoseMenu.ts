import sceneComposer from "./Scenes/SceneComposer";
import { FrenchFries, BottomBun, TopBun, Steak, Tomato, Lettuce, Bread, Sausage, Cake } from "./Ingredient";
import * as THREE from 'three';

function frenchfries() {
    sceneComposer.removeIngredients();

    let frenchFriesModel = new FrenchFries(new THREE.BoxGeometry(0, 0, 0));
    frenchFriesModel.load(sceneComposer.scene).then(() => {
        sceneComposer.addIngredient(frenchFriesModel);
        frenchFriesModel.setPosition(0, 0, 0);
    });
}

async function burger() {
    sceneComposer.removeIngredients();

    const ingredients : any[] = [
        new BottomBun(new THREE.BoxGeometry(0, 0, 0)),
        new Steak(new THREE.BoxGeometry(0, 5, 0)),
        new Lettuce(new THREE.BoxGeometry(0, 10, 0)),
        new Tomato(new THREE.BoxGeometry(0, 15, 0)),
        new TopBun(new THREE.BoxGeometry(0, 20, 0)),
    ];

    for (let o of ingredients) {
        await o.load(sceneComposer.scene);
        sceneComposer.addIngredient(o);
        o.get().rotation.x = 0.5;
    }
}

async function hotdog() {
    sceneComposer.removeIngredients();

    const ingredients : any[] = [
        new Bread(new THREE.BoxGeometry(0, 5, 0)),
        new Sausage(new THREE.BoxGeometry(0, 10, 0)),
    ]

    for (let o of ingredients) {
        await o.load(sceneComposer.scene);
        sceneComposer.addIngredient(o);
        o.get().rotation.x = 0.5;
    }
}

function cake() {
    sceneComposer.removeIngredients();

    let cakeModel = new Cake(new THREE.BoxGeometry(0, 5, 0));
    cakeModel.load(sceneComposer.scene).then(() => {
        sceneComposer.addIngredient(cakeModel);
        // cakeModel.setPosition(0, 0, 0);
    });
}

window.frenchfries = frenchfries;
window.burger = burger;
window.hotdog = hotdog;
window.cake = cake;
