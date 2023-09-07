import { Routes, Route } from "react-router-dom"
import AllRecipes from './components/AllRecipes'
import './App.css'
import RecipeCard from "./components/RecipeCard"

function App() {
  return (
    <>
    <div id="main-section">
      <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/recipe/:id" element={<RecipeCard />} />
      </Routes>
    </div>
    </>
  )
}

export default App
