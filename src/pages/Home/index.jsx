import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('r-api/?api=filmes');
      setMovies(response.data);
    }

    loadMovies();
  }, []);

  return (
    <div className="container">
      <div className="movies">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.nome}</strong>
              <img src={movie.foto} alt={movie.nome} />
              <Link to={`/movie/${movie.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
