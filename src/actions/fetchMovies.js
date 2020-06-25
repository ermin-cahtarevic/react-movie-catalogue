import axios from 'axios';
import { getMovies } from './index';
import { popularMoviesUrl } from '../helpers/apiEndpoints';

const fetchMovies = () => dispatch => {
  axios.get(popularMoviesUrl).then(res => {
    console.log(res);
  })
};

export default fetchMovies;