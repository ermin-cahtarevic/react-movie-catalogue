const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE = 'GET_MOVIE';

const initialState = {
  movies: [],
  movie: {},
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...action.payload],
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    default:return state;
  }
};

export default moviesReducer;