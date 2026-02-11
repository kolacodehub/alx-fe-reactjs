import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <div className="bg-gray-50">
        {/* Navbar stays OUTSIDE the container so it spans the full header */}
        <Navbar />

        {/* THE FIX:
           1. container = Sets a max-width (e.g., 1280px)
           2. mx-auto = Centers that container (Margin X Auto)
           3. px-4 = Adds safe space on mobile edges
           4. py-6 = Adds space top and bottom
        */}
        <main className="max-w-5xl mx-auto px-4 py-8">
          <Routes>
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
        </main>
      </div>
    </Router>
  );
}

export default App;
