import '../css/Favourite.css'; // Assuming you have a CSS file for styling the Favourite page
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favourite() {
    const { favourites } = useMovieContext();
if(favourites){
    return(
    <div className="favourite">
        <h2>Your Favourite Movies</h2>
    <div className="movie-list">
            {favourites.map((movie) =>  <MovieCard movie={movie} key={movie.id}/>)}
          </div>
    </div>)
}

    return (
        <div className="favourite-empty">
            <h2>No Favourite Movies</h2>
            <p>Start adding movies to your favourites and they will appear here.</p>
        </div>
    );
}


export default Favourite;
