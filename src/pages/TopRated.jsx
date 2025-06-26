import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getTopRatedMovies } from "../services/api";


function TopRated() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadTopRatedMovies = async () => {
            try {
                const topRatedMovies = await getTopRatedMovies()
                setMovies(topRatedMovies)
            } catch (error) {
                console.log(err)
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadTopRatedMovies()
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

export default TopRated