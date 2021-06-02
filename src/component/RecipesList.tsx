import { Recipe, Recipes } from "modal/Recipes";
import React from "react";

type Props = {
  recipes: Recipes;
};

function RecipesList(props: Props): React.ReactElement {
  const displayListMap = (element: Recipe) => {
    return (
      <li>
        {element.title}
        <img src={element.image} alt="" />
      </li>
    );
  };

  return (
    <div>
      <ul>{props.recipes.map(displayListMap)}</ul>
    </div>
  );
}

export default RecipesList;
