import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    
    useEffect(()=>{
        // Retrieve the "favorites" item from localStorage
        const storedFavs = localStorage.getItem("favorites")

        // If "favorites" exists in localStorage, parse it from JSON and update the state
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    // Save the current list of favorites to localStorage whenever it changes
    useEffect (() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    // Add a movie to the favorites list by appending it to the existing array
    const addToFavorites = (movie) => {
        setFavorites (prev => [...prev, movie])
    }
    
    // Remove a movie from the favorites list based on its unique ID
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    // Check if a movie is already in the favorites list by matching its ID
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}