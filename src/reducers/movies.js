const GET_MOVIES = 'GET_MOVIES';

const initialState = {
  movies: [],
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        movies: [...action.payload],
      };
    default:return state;
  }
};

export default moviesReducer;