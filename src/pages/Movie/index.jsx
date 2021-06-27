import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import './styles.css';

function Movie() {
  const { id } = useParams();
  const history = useHistory();

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        history.replace('/');
        return;
      }

      setMovie(response.data);
      setLoading(false);
    }

    loadMovie();

    return () => {};
  }, [id, history]);

  function favoriteMovies() {
    const myList = localStorage.getItem('movies');
    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some(
      (savedMovie) => savedMovie.id === movie.id,
    );

    if (hasMovie) {
      toast.info('This movie already saved');
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem('movies', JSON.stringify(savedMovies));
    toast.success('Successfully movie favorited');
  }

  if (loading) {
    return (
      <div className="movie-info">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="movie-info">
      <h1>{movie.nome}</h1>
      <img src={movie.foto} alt={movie.nome} />

      <h3>Sinopse</h3>
      {movie.sinopse}

      <div className="button">
        <button onClick={favoriteMovies}>Favorite</button>
        <button>
          <a
            target="blank"
            href={`https://www.youtube.com/results?search_query=${movie.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Movie;
