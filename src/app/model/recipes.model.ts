import { RecipeDetail } from './recipe-detail.model';

export interface Recipe {
    id: string;
    title: string;
    description: string;
    image_url: string;
    ingredients: RecipeDetail[];
}
