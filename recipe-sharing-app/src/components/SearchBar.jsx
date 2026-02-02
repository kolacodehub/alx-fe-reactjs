import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Trigger filtering whenever the input changes
  };

  return (
    <input
      type="text"
      placeholder="Search for a recipe..."
      onChange={handleSearch}
      className="search-bar" /* ADD CLASS HERE */
    />
  );
};

export default SearchBar;
