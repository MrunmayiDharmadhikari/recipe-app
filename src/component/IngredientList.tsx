import React from "react";
import { useRef } from "react";

type Props = {
  ingredients: String[];
  setIngredients: React.Dispatch<String[]>;
};

function IngredientList(props: Props): React.ReactElement {
  const inputRef = useRef();
  const { ingredients, setIngredients } = props;

  const keyPressed = (event: any) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const addItem = () => {
    const item = (inputRef?.current as any).value;
    (inputRef?.current as any).value = "";
    setIngredients([...ingredients, item] as any);
  };

  const listMap = (element: String) => {
    return <li>{element}</li>;
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter the ingredients"
          ref={inputRef as any}
          onKeyPress={keyPressed}
        />

        <button onClick={addItem}>Add Ingredient(s)</button>
      </div>
      <div>
        <ul>{ingredients.map(listMap)}</ul>
      </div>
    </div>
  );
}

export default IngredientList;
