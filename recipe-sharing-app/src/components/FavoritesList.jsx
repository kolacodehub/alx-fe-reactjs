import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  // Select favorites and map them to actual recipe objects
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id)),
  );

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid gold",
        borderRadius: "10px",
      }}
    >
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map(
          (recipe) =>
            recipe && ( // Check if recipe exists (in case it was deleted)
              <div key={recipe.id}>
                <h3>
                  <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                </h3>
                <p>{recipe.description}</p>
              </div>
            ),
        )
      )}
    </div>
  );
};

export default FavoritesList;
