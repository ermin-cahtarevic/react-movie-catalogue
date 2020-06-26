import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filterReducer from './filter';
import recomendationsReducer from './recomendations';

const reducer = () => combineReducers({
  movies: moviesReducer,
  filter: filterReducer,
  recomendations: recomendationsReducer,
});

export default reducer;
