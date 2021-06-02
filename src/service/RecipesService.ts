import axios from "axios";
import { Recipes } from "modal/Recipes";

const API_KEY = process.env.REACT_APP_API_KEY;
const PROVIDER_HOST = process.env.REACT_APP_PROVIDER_HOST;

export async function getRecipes(ingredients: String[]): Promise<Recipes> {
  const url = `https://${PROVIDER_HOST}/recipes/findByIngredients`;
  const options = {
    params: { ingredients: ingredients.join(), number: "10", ranking: "1" },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": PROVIDER_HOST,
    },
  };

  let results: Recipes = [];

  const response = await axios.get(url, options);
  results = response.data as Recipes;

  return results;
}
