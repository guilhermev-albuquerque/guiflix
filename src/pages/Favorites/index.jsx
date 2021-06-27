import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.css';

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem('movies');
    setMovies(JSON.parse(myList) || []);
  }, []);

  function handleDelete(id) {
    let moviesFilter = movies.filter((item) => {
      return item.id !== id;
    });

    setMovies(moviesFilter);
    localStorage.setItem('movies', JSON.stringify(moviesFilter));
    toast.success('Successfully deleted movie');
  }

  return (
    <div id="my-movies">
      <h1>My Movies</h1>

      {movies.length === 0 && (
        <span>Add movies to favorites to see them here</span>
      )}

      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>

              <div>
                <Link to={`/movie/${item.id}`}>See details</Link>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
