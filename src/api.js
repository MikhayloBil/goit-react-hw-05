import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDA0ZTExZGU4NGQwYzNjMDQ3YWFhNjM1YjNmOGZjZCIsIm5iZiI6MTcyMDk2NjQyMS42NjgzNywic3ViIjoiNjY5M2EyM2YxNWY0NTEwZTkxNWYzMWRkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.s4JOz8x7xK10PXb4OQ3CrP02fThUU50BuMjutkkkbUc";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};
