import {useMovieContext} from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


function Favorites() {
    // Destructure favorites array from context
    const {favorites} = useMovieContext();

     // If there are favorite movies, display them in a grid
    if (favorites.length > 0) {
        return <div className="favorites">
            <h2>Favorite Movies</h2>
            <div className="favorites-grid">
                {/* Map through favorites and render a MovieCard for each */}
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>;
    } else {
        // If no favorites, show an empty state message
        return <div className="favorites-empty">
            <h2>No favorite movies yet</h2>
            <p>Start adding movies to your favorites and they will appear here!</p>
        </div>
    }
}

export default Favorites