import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filterReducer from './filter';
import recommendationsReducer from './recommendations';

const reducer = () => combineReducers({
  movies: moviesReducer,
  filter: filterReducer,
  recommendations: recommendationsReducer,
});

export default reducer;
