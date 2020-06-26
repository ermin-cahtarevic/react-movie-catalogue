import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filterReducer from './filter';

const reducer = () => combineReducers({
  movies: moviesReducer,
  filter: filterReducer,
});

export default reducer;
