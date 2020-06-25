const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE = 'GET_MOVIE';

const getMovies = movies => ({
  type: GET_MOVIES,
  payload: movies,
});

const getMovie = movie => ({
  type: GET_MOVIE,
  payload: movie,
})

export { getMovies, getMovie };