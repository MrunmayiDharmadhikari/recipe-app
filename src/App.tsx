import IngredientsProvider from "context/RecipeSearchContext";
import RecipeSearch from "module/RecipeSearch";
import React from "react";

function App(): React.ReactElement {
  return (
    <div>
      <IngredientsProvider>
        <RecipeSearch />
      </IngredientsProvider>
    </div>
  );
}

export default App;
