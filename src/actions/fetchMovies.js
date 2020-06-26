import axios from 'axios';
import { getMovies } from './index';
import { popularMoviesUrl } from '../helpers/apiEndpoints';
import { filterMovies } from '../helpers/filterData';

const fetchMovies = () => dispatch => {
  axios.get(popularMoviesUrl).then(res => {
    const filtered = filterMovies(res.data.results);
    dispatch(getMovies(filtered));
  });
};

export default fetchMovies;
