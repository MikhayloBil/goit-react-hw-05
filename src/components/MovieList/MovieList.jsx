import { Link } from "react-router-dom";

const MovieList = ({ movies, previousLocationRef }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: previousLocationRef }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
