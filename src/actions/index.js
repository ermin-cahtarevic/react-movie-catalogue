const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE = 'GET_MOVIE';
const CLEAR_MOVIE = 'CLEAR_MOVIE';
const GET_TRAILER_ID = 'GET_TRAILER_ID';
const CLEAR_TRAILER_ID = 'CLEAR_TRAILER_ID';
const CHANGE_FILTER = 'CHANGE_FILTER';
const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS';
const MOVIE_NOT_FOUND = 'MOVIE_NOT_FOUND';

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

const getTrailerId = id => ({
  type: GET_TRAILER_ID,
  payload: id,
});

const clearTrailerId = () => ({
  type: CLEAR_TRAILER_ID,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const getRecommendations = data => ({
  type: GET_RECOMMENDATIONS,
  payload: data,
});

const movieNotFound = () => ({
  type: MOVIE_NOT_FOUND,
});

export {
  getMovies, getMovie, clearMovie, getTrailerId, clearTrailerId, changeFilter, getRecommendations, movieNotFound,
};
