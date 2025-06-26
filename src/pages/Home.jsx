import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getMowPlaying } from "../services/api";


function Home() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadNowPlayingMovies = async () => {
            try {
                const nowPlayingMovies = await getMowPlaying()
                setMovies(nowPlayingMovies)
            } catch (error) {
                console.log(err)
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadNowPlayingMovies()
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

export default Home