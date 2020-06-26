import axios from 'axios';
import { getRecomendations } from './index';
import { recomendationsUrl } from '../helpers/apiEndpoints';
import { filterMovies } from '../helpers/filterData';

const fetchRecomendations = id => dispatch => {
  const url = recomendationsUrl(id);

  axios.get(url).then(res => {
    const filtered = filterMovies(res.data.results)
    dispatch(getRecomendations(filtered));
  });
};

export default fetchRecomendations;