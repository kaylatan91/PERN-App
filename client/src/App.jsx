import { Routes, Route } from "react-router-dom"
import AllRecipes from './components/AllRecipes'
import './App.css'

function App() {
  return (
    <>
    <div id="main-section">
      <Routes>
        <Route path="/" element={<AllRecipes />} />
      </Routes>
    </div>
    </>
  )
}

export default App
