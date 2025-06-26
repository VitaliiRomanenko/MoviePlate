import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getPopularMovies } from "../services/api";


function Popular() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (error) {
                console.log(err)
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    return <div className="home">
        {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Loading...</div>
        ):(
            <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        )} 
    </div>
}

export default Popular