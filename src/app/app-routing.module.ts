import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesPageModule' },
  // { path: 'recipe-detail/:recipeId/:recipeTitle', loadChildren: './recipe-detail/recipe-detail.module#RecipeDetailPageModule' },
  { path: 'recipe-detail/:recipeId', loadChildren: './recipe-detail/recipe-detail.module#RecipeDetailPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
