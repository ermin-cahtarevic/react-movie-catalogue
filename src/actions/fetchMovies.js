import axios from 'axios';
import { getMovies, moviesNotFound } from './index';
import { popularMoviesUrl } from '../helpers/apiEndpoints';
import { filterMovies } from '../helpers/filterData';

const fetchMovies = () => dispatch => {
  axios.get(popularMoviesUrl).then(res => {
    const filtered = filterMovies(res.data.results);
    dispatch(getMovies(filtered));
  }).catch(err => {
    dispatch(moviesNotFound());
    throw (err);
  });
};

export default fetchMovies;
