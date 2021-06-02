import { Recipes } from "modal/Recipes";
import React, { createContext, useContext, useState } from "react";

const RecipeSearchContext = createContext({} as any);

export function useIngredientsContext() {
  const context = useContext(RecipeSearchContext);
  if (!context) {
    throw new Error(
      "useIngredientsContext must be used within RecipeSearchProvider"
    );
  }
  return [context[0], context[1]];
}

export function useRecipesContext() {
  const context = useContext(RecipeSearchContext);
  if (!context) {
    throw new Error(
      "useRecipesContext must be used within RecipeSearchProvider"
    );
  }
  return [context[2], context[3]];
}

function RecipeSearchProvider(props: any) {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipes>([]);

  return (
    <RecipeSearchContext.Provider
      value={[ingredients, setIngredients, recipes, setRecipes]}
      {...props}
    />
  );
}

export default RecipeSearchProvider;
