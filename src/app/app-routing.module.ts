import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesPageModule' },
  // { path: 'recipe-detail/:recipeId/:recipeTitle', loadChildren: './recipe-detail/recipe-detail.module#RecipeDetailPageModule' },
  { path: 'recipe-detail/:recipeId', loadChildren: './recipe-detail/recipe-detail.module#RecipeDetailPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'qrscanner', loadChildren: './qrscanner/qrscanner.module#QrscannerPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
