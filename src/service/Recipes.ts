import axios from "axios";

export async function getRecipes(ingredients: String[]): Promise<any[]> {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients";
  const options = {
    params: { ingredients: ingredients.join(), number: "10", ranking: "1" },
    headers: {
      "x-rapidapi-key": "0d9d2beebfmsh18349e03b983531p1ec97djsn13797f46ccb8",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  let results: any[] = [];

  const response = await axios.get(url, options as any);
  results = response.data as any[];

  return results;
}
