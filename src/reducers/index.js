import { combineReducers } from 'redux';
import moviesReducer from './movies';

const reducer = () => {
  return combineReducers({
    movies: moviesReducer,
  });
};

export default reducer;