import { IRecipe } from './types'

export const recipes: IRecipe[] = [
    {
        name: "Spaghetti Carbonara",
        instructions: "Cuire les pâtes. Dans une poêle, faire revenir les lardons. Mélanger les œufs et le parmesan. Ajouter les pâtes et le mélange œufs-parmesan aux lardons. Servir chaud.",
        ingredients: [
            "200g de spaghetti",
            "100g de lardons",
            "2 œufs",
            "50g de parmesan",
            "Sel",
            "Poivre"
        ],
        prepTime: "10 minutes",
        cookTime: "20 minutes",
        category: "Pâtes"
    },
    {
        name: "Poulet Curry",
        instructions: "Faire revenir le poulet dans une poêle. Ajouter les oignons et l'ail. Incorporer la pâte de curry et le lait de coco. Laisser mijoter 20 minutes. Servir avec du riz.",
        ingredients: [
            "400g de poulet",
            "1 oignon",
            "2 gousses d'ail",
            "2 cuillères à soupe de pâte de curry",
            "400ml de lait de coco",
            "200g de riz",
            "Sel",
            "Poivre"
        ],
        prepTime: "15 minutes",
        cookTime: "30 minutes",
        category: "Volaille"
    },
    {
        name: "Salade César",
        instructions: "Laver et couper la laitue. Préparer la sauce en mélangeant le yaourt, le jus de citron, le parmesan et l'ail. Ajouter le poulet grillé, les croûtons et la sauce à la salade. Servir frais.",
        ingredients: [
            "1 laitue romaine",
            "200g de poulet grillé",
            "50g de parmesan",
            "1 yaourt nature",
            "1 gousse d'ail",
            "Jus de citron",
            "Croûtons",
            "Sel",
            "Poivre"
        ],
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        category: "Salades"
    },
    {
        name: "Soupe à l'oignon",
        instructions: "Faire revenir les oignons dans du beurre jusqu'à ce qu'ils soient dorés. Ajouter le bouillon et laisser mijoter 30 minutes. Servir avec des tranches de pain grillé et du fromage fondu.",
        ingredients: [
            "4 oignons",
            "50g de beurre",
            "1L de bouillon de bœuf",
            "8 tranches de pain",
            "100g de fromage râpé",
            "Sel",
            "Poivre"
        ],
        prepTime: "15 minutes",
        cookTime: "40 minutes",
        category: "Soupes"
    },
    {
        name: "Tarte aux pommes",
        instructions: "Préparer la pâte. Éplucher et couper les pommes. Disposer les pommes sur la pâte. Saupoudrer de sucre et de cannelle. Cuire au four à 180°C pendant 40 minutes.",
        ingredients: [
            "200g de farine",
            "100g de beurre",
            "5 pommes",
            "100g de sucre",
            "Cannelle",
            "Sel"
        ],
        prepTime: "20 minutes",
        cookTime: "40 minutes",
        category: "Desserts"
    }
];