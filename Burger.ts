import * as THREE from 'three';

import { Ingredient } from './Ingredient';

export default class Burger  {
  ingredients : Ingredient[] ;

  constructor() {
    this.ingredients = [];
  }

  addIngredient(ingredient : Ingredient) {
    if (this.ingredients.length > 0) {
        ingredient.get().position.y = this.ingredients[this.ingredients.length - 1].get().position.y + 1;
    } else {
        ingredient.get().position.y = 18;
    }
    ingredient.get().position.x = 5;
    ingredient.get().position.z = 5;
    this.ingredients.push(ingredient);
  }

  removeIngredient() {
    return this.ingredients.pop();
  }

  update(delta: number) {
  }
}