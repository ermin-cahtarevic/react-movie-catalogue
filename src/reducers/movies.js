const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE = 'GET_MOVIE';
const CLEAR_MOVIE = 'CLEAR_MOVIE';
const GET_TRAILER_ID = 'GET_TRAILER_ID';
const CLEAR_TRAILER_ID = 'CLEAR_TRAILER_ID';
const MOVIES_NOT_FOUND = 'MOVIES_NOT_FOUND';
const MOVIE_NOT_FOUND = 'MOVIE_NOT_FOUND';

const initialState = {
  moviesLoading: true,
  movies: [],
  movieLoading: true,
  movie: {},
  trailerId: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoading: false,
        movies: [...action.payload],
      };
    case GET_MOVIE:
      return {
        ...state,
        moviesLoading: true,
        movieLoading: false,
        movie: action.payload,
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        movieLoading: true,
        movie: {},
      };
    case GET_TRAILER_ID:
      return {
        ...state,
        trailerId: action.payload,
      };
    case CLEAR_TRAILER_ID:
      return {
        ...state,
        trailerId: null,
      };
    case MOVIES_NOT_FOUND:
      return {
        ...state,
        moviesLoading: false,
        movies: null,
      };
    case MOVIE_NOT_FOUND:
      return {
        ...state,
        movieLoading: false,
        movie: null,
      };
    default: return state;
  }
};

export default moviesReducer;
