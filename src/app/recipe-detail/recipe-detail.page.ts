import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipeID = '';
  recipeTitle = '';
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMAp => {
    //   this.recipeID = paramMAp.get('recipeId');
    //   this.recipeTitle = paramMAp.get('recipeTitle');
    if(!paramMAp.has('recipeId')) {
      return;
    }
    const recipeId = paramMAp.get('recipeId');
    this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

}
