const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE = 'GET_MOVIE';
const CLEAR_MOVIE = 'CLEAR_MOVIE';

const getMovies = movies => ({
  type: GET_MOVIES,
  payload: movies,
});

const getMovie = movie => ({
  type: GET_MOVIE,
  payload: movie,
});

const clearMovie = () => ({
  type: CLEAR_MOVIE,
});

export { getMovies, getMovie, clearMovie };