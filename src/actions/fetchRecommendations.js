import axios from 'axios';
import { getRecommendations } from './index';
import { recommendationsUrl } from '../helpers/apiEndpoints';
import { filterMovies } from '../helpers/filterData';

const fetchRecommendations = id => dispatch => {
  const url = recommendationsUrl(id);

  axios.get(url).then(res => {
    const filtered = filterMovies(res.data.results)
    dispatch(getRecommendations(filtered));
  });
};

export default fetchRecommendations;