import IngredientList from "component/IngredientList";
import React from "react";

function RecipeSearch(): React.ReactElement {
  return (
    <div>
      <h1>Recipe Recommendations</h1>
      <IngredientList />
    </div>
  );
}

export default RecipeSearch;
