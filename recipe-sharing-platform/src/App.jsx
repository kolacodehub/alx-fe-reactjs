import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// 1. IMPORT YOUR COMPONENTS
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import recipeData from "./data.json";

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  const addRecipe = (newRecipe) => {
    const recipeWithId = { ...newRecipe, id: Date.now() };
    setRecipes([recipeWithId, ...recipes]);
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* These are the changing pages */}
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetail recipes={recipes} />}
        />
        <Route
          path="/add-recipe"
          element={<AddRecipeForm onAdd={addRecipe} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
