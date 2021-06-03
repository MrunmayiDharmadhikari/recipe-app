import IngredientList from "component/IngredientList";
import RecipesList from "component/RecipesList";
import {
  useIngredientsContext,
  useRecipesContext,
} from "context/RecipeSearchContext";
import React from "react";
import { getRecipes } from "service/RecipesService";

function RecipeSearch(): React.ReactElement {
  const [ingredients] = useIngredientsContext();

  const [, setRecipes] = useRecipesContext();

  const searchHandler = async () => {
    const result = await getRecipes(ingredients);
    setRecipes(result);
  };

  return (
    <div className="bg-gray-50 h-screen flex justify-center">
      <div className="w-3/5">
        <div className="mt-16" >
          <h1 className="font-semibold text-5xl" >Cook with what you have</h1>
          <p className="mt-8 text-xl font-light leading-relaxed" >
            Binge-eating or Stress-eating? <br />
            We've got you covered! <br />
            Craving a midnight snack or a healthy meal? <br />
            We've got you covered!
          </p>
        </div>

        <div className="mt-10">
          <IngredientList />
          
          <button className="mt-8 bg-blue-400 px-6 py-4 text-white rounded-full"  
          onClick={searchHandler}>Search Recipes</button>
        </div>

        <div>
          <RecipesList />
        </div>
      </div>
    </div>
  );
}

export default RecipeSearch;
