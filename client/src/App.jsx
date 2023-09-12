import { Routes, Route } from "react-router-dom"
import AllRecipes from './components/AllRecipes'
import './App.css'
import RecipeCard from "./components/RecipeCard"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import CreateRecipeForm from "./components/CreateRecipe"

function App() {
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
      </Routes>
    </div>
    <div>
    </div>
    </>
  )
}

export default App
