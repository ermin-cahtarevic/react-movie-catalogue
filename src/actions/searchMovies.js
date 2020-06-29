import axios from 'axios';
import { getMovies, moviesNotFound } from './index';
import { searchUrl } from '../helpers/apiEndpoints';
import { filterMovies } from '../helpers/filterData';

const searchMovies = query => dispatch => {
  const url = searchUrl(query);
  console.log('works')
  axios.get(url).then(res => {
    console.log(res.data)
    const filtered = filterMovies(res.data.results);
    dispatch(getMovies(filtered));
  }).catch(err => {
    dispatch(moviesNotFound());
    console.log(err.response);
  });
};

export default searchMovies;