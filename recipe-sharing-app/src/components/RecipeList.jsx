import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm); // Get search term to trigger useEffect
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // This effect ensures that the list is filtered whenever the search term or the recipes list changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes, filterRecipes]);

  return (
    <div className="recipe-grid">
      {" "}
      {/* CHANGE TO GRID CLASS */}
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            {" "}
            {/* ADD CARD CLASS */}
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description.substring(0, 100)}...</p>{" "}
            {/* Truncate text */}
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};
export default RecipeList;
