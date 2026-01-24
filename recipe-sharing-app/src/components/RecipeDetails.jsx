import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import { useParams } from "react-router-dom";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import FavoriteButton from "./FavoriteButton";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId)),
  );

  // Trigger recommendations generation when viewing details
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations,
  );
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <FavoriteButton recipeId={recipe.id} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
