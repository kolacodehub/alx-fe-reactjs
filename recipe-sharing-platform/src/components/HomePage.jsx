import React, { useState } from "react";
import recipeData from "../data.json";

const HomePage = () => {
  const [recipes] = useState(recipeData);

//   No need of it, since i am getting data or something outside react

//   useEffect(() => {
//     setRecipes(recipeData);
//   }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Recipe Sharing Platform
      </h1>

      {/* Step 4: Responsive Grid Layout 
        - grid-cols-1 (Mobile default)
        - sm:grid-cols-2 (Tablet)
        - lg:grid-cols-3 (Desktop)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700 transition duration-300">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
