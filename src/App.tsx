import React from "react";
import { useState, useEffect, useRef } from "react";
import { getRecipes } from "./service/Recipes";

function App() {
  const [ingredients, setIngredients] = useState(["sugar","apples"]);

  const [recipes, setRecipes] = useState();
  

  useEffect(function () {
  //  getRecipes(ingredients).then((recipes) => {
  //    setRecipes(recipes as any)
  //    console.log(recipes);
  //  } )

    console.log(ingredients);
  });

  const listMap = (element: String) => {
    return <li>{element}</li>;
  };

  const inputRef = useRef();

  const keyPressed = (event : any) => {
    if(event.key === "Enter") {
      addItem();
    }
  }

  const addItem = () => {
    const item = (inputRef?.current as any).value;
    (inputRef?.current as any).value = "";
    setIngredients([...ingredients, item] as any);
  };

  return (
    <div>
      <h1>Recipe Recommendations</h1>
      <div>
        <input type="text" placeholder="enter the ingredients" ref={inputRef as any} onKeyPress = {keyPressed} />

        <button onClick={addItem}>Add Ingredient(s)</button>

        <button>Search</button>
      </div>
      <div>
        <ul>{ingredients.map(listMap)}</ul>
      </div>
    </div>
  );
}

export default App;

//{JSON.stringify(recipes)}
