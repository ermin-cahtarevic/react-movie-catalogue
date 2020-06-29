import axios from 'axios';
import { getRecommendations, noRecommendations } from './index';
import { recommendationsUrl } from '../helpers/apiEndpoints';
import { filterMovies } from '../helpers/filterData';

const fetchRecommendations = id => dispatch => {
  const url = recommendationsUrl(id);

  axios.get(url).then(res => {
    const filtered = filterMovies(res.data.results);
    dispatch(getRecommendations(filtered));
  }).catch(err => {
    dispatch(noRecommendations());
    throw (err);
  });
};

export default fetchRecommendations;
