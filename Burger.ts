import * as THREE from 'three';

// import Ingredient from './Ingredient';

export default class Burger {
  position : THREE.Vector3;
  ingredients : Ingredient[] ;

  constructor(position : THREE.Vector3) {
    this.position = position;
    this.ingredients = [];
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
  }

  setPosition(position : THREE.Vector3) {
    this.position = position;
  }

  removeIngredient(ingredient : Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
  }
}