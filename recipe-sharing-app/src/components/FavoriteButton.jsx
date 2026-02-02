import { useRecipeStore } from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

return (
  <button
    onClick={() =>
      isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
    }
    style={{
      background: isFavorite ? "#fbbf24" : "#e5e7eb", // Gold or Gray
      color: isFavorite ? "#1f2937" : "#1f2937",
      border: "none",
      padding: "8px 16px",
      borderRadius: "20px", // Pill shape
      cursor: "pointer",
      marginTop: "10px",
      fontWeight: "bold",
    }}
  >
    {isFavorite ? "★ Favorited" : "☆ Add to Favorites"}
  </button>
);
};

export default FavoriteButton;
