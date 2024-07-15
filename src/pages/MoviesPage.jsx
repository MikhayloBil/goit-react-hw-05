import { useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../api";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleSearch = async (event) => {
    event.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <MovieList movies={movies} previousLocationRef={location.pathname} />
      )}
    </div>
  );
};

export default MoviesPage;
