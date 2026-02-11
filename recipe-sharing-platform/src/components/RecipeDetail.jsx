import React from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();

  const recipe = recipeData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Recipe not found!</h2>
        <Link to="/" className="text-blue-500 underline">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition"
      >
        &larr; Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-96 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {recipe.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 italic border-l-4 border-blue-500 pl-4">
            {recipe.summary}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b border-blue-200 pb-2">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients &&
                  recipe.ingredients.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                Instructions
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {recipe.instructions.split("\n").map((step, index) => (
                  <p key={index} className="mb-2">
                    {step}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
