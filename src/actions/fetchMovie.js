import axios from 'axios';
import { getMovie } from './index';
import { movieDetailsUrl } from '../helpers/apiEndpoints';
import { filterMovie } from '../helpers/filterData';

const fetchMovie = id => dispatch => {
  const url = movieDetailsUrl(id);

  axios.get(url).then(res => {
    const filtered = filterMovie(res.data);
    dispatch(getMovie(filtered));
  });
};

export default fetchMovie;
