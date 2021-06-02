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
    <div>
      <h1>Recipe Recommendations</h1>
      <IngredientList />
      <button onClick={searchHandler}>Search</button>
      <RecipesList />
    </div>
  );
}

export default RecipeSearch;
