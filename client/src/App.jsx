import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AllRecipes from "./components/AllRecipes";
import RecipeCard from "./components/RecipeCard";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CreateRecipeForm from "./components/CreateRecipe";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div id="nav-bar-container">
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/recipes/:id" element={<RecipeCard />} />
          <Route path="/recipes/create" element={<CreateRecipeForm />} />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route
            path="/register"
            element={<Register token={token} setToken={setToken} />}
          />
        </Routes>
      </div>
      <div></div>
    </>
  );
}

export default App;
