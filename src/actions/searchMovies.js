import axios from 'axios';
import { getMovies, moviesNotFound } from './index';
import { searchUrl } from '../helpers/apiEndpoints';
import { filterMovies } from '../helpers/filterData';

const searchMovies = query => dispatch => {
  const url = searchUrl(query);

  axios.get(url).then(res => {
    const filtered = filterMovies(res.data.results);
    dispatch(getMovies(filtered));
  }).catch(err => {
    dispatch(moviesNotFound());
    throw (err);
  });
};

export default searchMovies;
