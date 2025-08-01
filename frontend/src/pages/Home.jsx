import Moviecard from '../components/MovieCard';
import { useState,useEffect } from 'react';
import { searchMovies,getPopularMovies } from '../services/api';
import '../css/Home.css'; // Assuming you have a CSS file for styling the Home page

function Home(){
const [searchQuery, setSearchQuery] = useState("");
const [movies, setMovies] = useState([]);
const[error, setError] = useState(null);
const[loading, setLoading] = useState(true);
useEffect(() => {
    const loadPopularMovies = async () => {
        try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        } catch (error) {
           setError("Failed to fetch popular movies");
            console.error("Error fetching popular movies:", error);
        }
        finally{
          setLoading(false);
        }
    };

    loadPopularMovies();
}, []);

const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) {
        
        return;
    }
    if(loading) return; // Prevent multiple submissions while loading

    setLoading(true);
    try {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
        setError(null); // Clear any previous errors
    } catch (error) {
        setError("Failed to fetch search results");
        console.error("Error fetching search results:", error);
    } finally {
        setLoading(false);
    }

     // Clear the search input after submission
};


    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input type="text" placeholder="Search for a movie..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {loading?(<div className="loading">Loading...</div>):(
          <div className="movie-list">
            {movies.map((movie) =>  <Moviecard movie={movie} key={movie.id}/>)}
          </div>
        )}
    </div>);
  
}
export default Home;