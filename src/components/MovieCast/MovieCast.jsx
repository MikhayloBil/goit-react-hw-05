import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <ul>
          {cast.map((member) => (
            <li key={member.cast_id}>
              {member.name} as {member.character}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available for this movie.</p>
      )}
    </div>
  );
};

export default MovieCast;
