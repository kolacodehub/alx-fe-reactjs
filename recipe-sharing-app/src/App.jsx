import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList"; 
import RecommendationsList from "./components/RecommendationsList"; 

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />

                {/* Layout for Favorites and Recommendations */}
                <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
                  <div style={{ flex: 1 }}>
                    <FavoritesList />
                  </div>
                  <div style={{ flex: 1 }}>
                    <RecommendationsList />
                  </div>
                </div>

                <h2>All Recipes</h2>
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
