import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};

export default MovieReviews;
