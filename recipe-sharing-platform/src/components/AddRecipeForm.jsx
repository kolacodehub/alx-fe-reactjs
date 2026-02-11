import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!title) newErrors.title = "Recipe title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Preparation steps are required";
    else if (ingredients.split(",").length < 2) {
      newErrors.ingredients =
        "Please include at least two ingredients (comma separated)";
    }

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log({ title, ingredients, steps });
    alert("Recipe posted successfully!");

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
            placeholder="e.g., Spaghetti Bolognese"
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="ingredients"
          >
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.ingredients ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
            placeholder="e.g., Pasta, Beef, Tomato Sauce, Onions"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.ingredients}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="6"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.steps ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
            placeholder="e.g., 1. Boil water. 2. Cook pasta..."
          />
          {errors.steps && (
            <p className="text-red-500 text-xs italic mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
        >
          Post Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
