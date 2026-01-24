import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "10px" }}>
          <h4>{recipe.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
