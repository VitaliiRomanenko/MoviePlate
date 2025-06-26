import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Popular from './pages/Popular'
import NavBar from './components/NavBar'
import TopRated from './pages/TopRated'
import Search from './pages/Search'
import {MovieProvider} from "./contexts/MovieContext"

function App() {

  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/top_rated" element={<TopRated/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
