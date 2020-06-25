import axios from 'axios';
import { getMovies } from './index';
import { popularMoviesUrl } from '../helpers/apiEndpoints';

const fetchMovies = () => dispatch => {
  axios.get(popularMoviesUrl).then(res => {
    dispatch(getMovies(res.data.results));
  });
};

export default fetchMovies;
