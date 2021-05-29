import axios from "axios";

export async function getRecipes(ingredients: String[]): Promise<any[]> {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients";
  const options = {
    params: { ingredients: ingredients.join(), number: "10", ranking: "1" },
    headers: {
      
    },
  };

  let results: any[] = [];

  const response = await axios.get(url, options as any);
  results = response.data as any[];

  return results;
}
