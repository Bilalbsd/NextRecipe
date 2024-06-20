export interface IRecipe {
    name: string;
    instructions: string;
    ingredients: string[];
    prepTime: string;
    cookTime: string;
    category: string;
}

export type Category = 'Pâtes' | 'Volaille' | 'Salades' | 'Soupes' | 'Desserts' | 'Végétarien' | 'Poisson' | 'Vegan' | 'Sans gluten' | 'Entrées';

export interface IRecipeReduced {
    value: string,
    label: string,
}