import axios from 'axios';
import { getMovie } from './index';
import { movieDetailsUrl } from '../helpers/apiEndpoints';

const fetchMovie = id => dispatch => {
  const url = movieDetailsUrl(id);

  axios.get(url).then(res => {
    dispatch(getMovie(res.data));
  });
};

export default fetchMovie;
