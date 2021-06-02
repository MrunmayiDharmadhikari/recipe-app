import IngredientList from "component/IngredientList";
import RecipesList from "component/RecipesList";
import { Recipes } from "modal/Recipes";
import React, { useState } from "react";
import { getRecipes } from "service/RecipesService";

function RecipeSearch(): React.ReactElement {
  const [ingredients, setIngredients] = useState<String[]>([]);

  const [recipes, setRecipes] = useState<Recipes>([]);

  const searchHandler = async () => {
    const result = await getRecipes(ingredients);
    setRecipes(result);
  };

  return (
    <div>
      <h1>Recipe Recommendations</h1>
      <IngredientList
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <button onClick={searchHandler}>Search</button>
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default RecipeSearch;
