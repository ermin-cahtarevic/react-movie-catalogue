import axios from 'axios';
import { getMovie, movieNotFound } from './index';
import { movieDetailsUrl } from '../helpers/apiEndpoints';
import { filterMovie } from '../helpers/filterData';

const fetchMovie = id => dispatch => {
  const url = movieDetailsUrl(id);

  axios.get(url).then(res => {
    const filtered = filterMovie(res.data);
    dispatch(getMovie(filtered));
  }).catch(err => {
    if (err.response.status === 404) {
      dispatch(movieNotFound());
    }
    throw (err);
  });
};

export default fetchMovie;
