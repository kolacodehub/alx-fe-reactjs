import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    const recipeId = parseInt(id);
    const foundRecipe = recipeData.find((r) => r.id === recipeId);
    if (foundRecipe) {
      setRecipe(foundRecipe);
    }
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => window.history.back()}
        className="mb-4 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
      >
        Back to Home
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredients Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2">
              {/* Check if ingredients exist before mapping to avoid errors */}
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient}
                  </li>
                ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {recipe.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail