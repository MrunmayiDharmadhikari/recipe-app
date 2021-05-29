import React from "react";
import { useState, useEffect } from "react";
import { getRecipes } from "./service/Recipes";

function App() {
  const ingredients = ["apples", "flour", "sugar"];

  const [recipes, setRecipes] = useState();

  useEffect(function() {
    getRecipes(ingredients).then((recipes) => {setRecipes(recipes as any)} )
  });

  return <div> {JSON.stringify(recipes)} </div>;
}

export default App;
