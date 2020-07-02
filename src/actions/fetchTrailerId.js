import axios from 'axios';
import { getTrailerId } from './index';
import { movieTrailerUrl } from '../helpers/apiEndpoints';

const fetchTrailerId = id => dispatch => {
  const url = movieTrailerUrl(id);

  axios.get(url).then(res => {
    if (res.data.results[0] === undefined) {
      dispatch(getTrailerId(null));
    } else {
      dispatch(getTrailerId(res.data.results[0].key));
    }
  }).catch(err => {
    throw (err);
  });
};

export default fetchTrailerId;
