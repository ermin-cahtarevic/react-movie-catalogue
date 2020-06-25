import { combineReducers } from 'redux';
import moviesReducer from './movies';

const reducer = () => combineReducers({
  movies: moviesReducer,
});

export default reducer;
