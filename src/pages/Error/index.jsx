import { Link } from 'react-router-dom';
import './styles.css';

function Error() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">See all movies</Link>
    </div>
  );
}

export default Error;
