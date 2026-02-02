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
      <div className="app-container">
        {" "}
        {/* ADD CLASS HERE */}
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />

                {/* Flex Container for side-by-side lists */}
                <div className="side-section">
                  <div className="side-box">
                    <FavoritesList />
                  </div>
                  <div className="side-box">
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
