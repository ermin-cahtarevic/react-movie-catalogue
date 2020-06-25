const GET_MOVIES = 'GET_MOVIES';

const getMovies = movies => ({
  type: GET_MOVIES,
  payload: movies,
});

export { getMovies };