import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Mee Goreng',
      description: 'Mee kuning digoreng pedas',
      image_url: 'http://murnidiscovery.com/site/wp-content/uploads/2017/03/2_mee-goreng2-500x331.jpg',
      ingredients: ['Mee Kuning', 'Cili', 'Sos Tomato', 'Ayam']
    },
    {
      id: 'r2',
      title: 'Ayam Goreng',
      description: 'Ayam disalut tepung rangup',
      image_url: 'https://iluminasi.com/img/upload/ayam-goreng-996.jpg',
      ingredients: ['Ayam', 'Tepung', 'Telur', 'Lada Hitam']
    },
    {
      id: 'r3',
      title: 'Nasi Goreng',
      description: 'Nasi digoreng bersama rempah ratus melayu',
      image_url: 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7-1500x1125.jpg',
      ingredients: ['Nasi', 'Bawang', 'Telur', 'Ikan Bilis', 'Daun Bawang']
    }
    ,
    {
      id: 'r4',
      title: 'Nasi Lemak',
      description: 'Nasi dimasak bersama santan segar',
      image_url: 'http://murnidiscovery.com/site/wp-content/uploads/2017/03/2_mee-goreng2-500x331.jpg',
      ingredients: ['Nasi', 'Santan', 'Bawang', 'Ikan Bilis', 'Timun']
    }
  ];
  
  constructor() { }

  getAllRecipes() {
    return [ ... this.recipes ];
  }

  getRecipe(recipeID: string) {
    return {
      ... this.recipes.find(recipe => {
        return recipe.id === recipeID;
      })
    }
  }
}
