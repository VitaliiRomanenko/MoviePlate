import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

// Search component allows users to search for movies by a query string
function Search() {
    const [searchParams] = useSearchParams();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([]);
    // Get the query parameter from the URL
    // e.g., if the URL is /search?query=Inception, query will be "Inception"
    const query = searchParams.get('query');
    useEffect(() => {
        setLoading (true)
        const searchMovie = async () => {
            try {
                const searchResults  = await searchMovies(query)
                setMovies(searchResults)
                setError(null)
            } catch (error) {
                console.log(error)
                setError("Failed to search movies...")
            } finally {
                setLoading(false)
            }
        }
        searchMovie();
    }, [query]);

    return (
        
        <div className="search-page">
            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ):(
                <div className="movies-grid">
                    {/* Sort movies by popularity in descending order */}
                    {movies.sort((a, b) => a.popularity < b.popularity ? 1 : -1).map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;