import { useRecipesContext } from "context/RecipeSearchContext";
import { Recipe } from "modal/Recipes";
import React from "react";

function RecipesList(): React.ReactElement {
  const displayListMap = (element: Recipe) => {
    return (
      <li>
        {element.title}
        <img src={element.image} alt="" />
      </li>
    );
  };

  const [recipes] = useRecipesContext();
  
  return (
    <div>
      <ul>{recipes.map(displayListMap)}</ul>
    </div>
  );
}

export default RecipesList;
