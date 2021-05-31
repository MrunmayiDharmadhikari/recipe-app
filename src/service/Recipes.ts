import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const PROVIDER_HOST = process.env.REACT_APP_PROVIDER_HOST;

export async function getRecipes(ingredients: String[]): Promise<any[]> {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients";
  const options = {
    params: { ingredients: ingredients.join(), number: "10", ranking: "1" },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": PROVIDER_HOST
    },
  };

  let results: any[] = [];

  const response = await axios.get(url, options as any);
  results = response.data as any[];

  return results;
}
