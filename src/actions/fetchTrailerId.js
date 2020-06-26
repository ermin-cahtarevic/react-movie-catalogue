import axios from 'axios';
import { getTrailerId } from './index';
import { movieTrailerUrl } from '../helpers/apiEndpoints';

const fetchTrailerId = id => dispatch => {
  const url = movieTrailerUrl(id);

  axios.get(url).then(res => {
    dispatch(getTrailerId(res.data.results[0].key));
  });
};

export default fetchTrailerId;
