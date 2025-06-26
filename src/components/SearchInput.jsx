import { useState } from "react";
import { useNavigate } from "react-router-dom";

// SearchInput component allows users to search for movies by entering a query
const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const naivigate = useNavigate()

    const handleSearch = async (e) => {
            e.preventDefault()
            if (!searchQuery.trim()) return
            // Navigate to the search results page with the query
            // e.g., if the user searches for "Inception", it will navigate to /search?query=Inception
            naivigate("/search?query=" + encodeURIComponent(searchQuery))
        };
    return (
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchInput;