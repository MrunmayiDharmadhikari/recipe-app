import { useIngredientsContext } from "context/RecipeSearchContext";
import React from "react";
import { useRef } from "react";

function IngredientList(): React.ReactElement {
  const inputRef = useRef();
  const [ingredients, setIngredients] = useIngredientsContext();

  const keyPressed = (event: any) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const addItem = () => {
    const item = (inputRef?.current as any).value;
    if (item === "") return;
    item.trim();
    (inputRef?.current as any).value = "";
    setIngredients([...ingredients, item] as any);
  };

  const listMap = (element: String) => {
    return (
      <li className="ml-2 my-1">
        <div className="flex bg-white px-4 py-2 rounded-full shadow-lg text-gray-800 font-light">
          <p className="">{element}</p>
          <p className="ml-2 cursor-pointer">x</p>
        </div>
      </li>
    );
  };

  return (
    <div>
      <div>
        <input
          className="px-6 py-4 rounded-full focus:outline-none shadow-md"
          type="text"
          placeholder="Enter the ingredients"
          ref={inputRef as any}
          onKeyPress={keyPressed}
        />

        <button
          className="ml-10 border-blue-400 border-2 px-6 py-4 rounded-full text-blue-400 hover:bg-blue-100 focus:outline-none"
          onClick={addItem}
        >
          Add Ingredient
        </button>
      </div>
      <div className="mt-6">
        <h3>{ingredients.length ? "Your Pantry Ingredients:" : ""}</h3>
        <ul className="my-2 flex flex-wrap">{ingredients.map(listMap)}</ul>
      </div>
    </div>
  );
}

export default IngredientList;
