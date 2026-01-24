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
      placeholder="Search recipes..."
      onChange={handleSearch}
      style={{ margin: "20px 0", padding: "10px", width: "300px" }}
    />
  );
};

export default SearchBar;
