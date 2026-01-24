import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  // 1. Select the raw data separately.
  // This is safer than doing complex logic inside the selector.
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  // 2. Defensive check: If favorites hasn't been initialized in the store yet, don't crash.
  if (!favorites || !recipes) {
    return null; // Or return <div>Loading...</div>
  }

  // 3. Map IDs to recipes and filter out any undefined ones (in case a recipe was deleted)
  const displayedFavorites = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter((recipe) => recipe !== undefined);

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid gold",
        borderRadius: "10px",
      }}
    >
      <h2>My Favorites</h2>
      {displayedFavorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        displayedFavorites.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "15px" }}>
            <h3>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
