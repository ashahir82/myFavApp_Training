import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipes.model';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipeID = '';
  recipeTitle = '';
  loadedRecipe: Recipe[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMAp => {
    //   this.recipeID = paramMAp.get('recipeId');
    //   this.recipeTitle = paramMAp.get('recipeTitle');
    if(!paramMAp.has('recipeId')) {
      return;
    }

    const recipeId = paramMAp.get('recipeId');
    this.getRecipe(recipeId);
    // this.loadedRecipe = this.authService.getRecipe(recipeId);
    });
  }

  getRecipe(recipeId: string) {
    this.authService.getRecipe(recipeId).subscribe(
      recipe => {
        this.loadedRecipe = recipe;
      },
      error => {
        console.log(error);
      }
    );
  }

}
