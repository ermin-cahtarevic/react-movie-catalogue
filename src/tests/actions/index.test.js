import {
  getMovies, getMovie, clearMovie, getTrailerId, clearTrailerId, changeFilter, getRecommendations,
  noRecommendations, moviesNotFound, movieNotFound,
} from '../../actions/index';
import { movies, movie } from '../helper/helper';

describe('Get Movies', () => {
  it('Should return an object containing the action and payload with the movies', () => {
    const response = getMovies(movies);

    expect(response.type).toEqual('GET_MOVIES');
    expect(response.payload).toEqual(movies);
  });
});

describe('Get Movie', () => {
  it('Should return an object containing the action and payload with the movie', () => {
    const response = getMovie(movie);

    expect(response.type).toEqual('GET_MOVIE');
    expect(response.payload).toEqual(movie);
  });
});

describe('Clear Movie', () => {
  it('Should return an object containing the action', () => {
    const response = clearMovie();

    expect(response.type).toEqual('CLEAR_MOVIE');
  });
});

describe('Get Trailer ID', () => {
  it('Should return an object containing the action and payload with the ID', () => {
    const response = getTrailerId(550);

    expect(response.type).toEqual('GET_TRAILER_ID');
    expect(response.payload).toEqual(550);
  });
});

describe('Cear Trailer ID', () => {
  it('Should return an object containing the action', () => {
    const response = clearTrailerId();

    expect(response.type).toEqual('CLEAR_TRAILER_ID');
  });
});

describe('Change Filter', () => {
  it('Should return an object containing the action and payload with the filter', () => {
    const response = changeFilter('Action');

    expect(response.type).toEqual('CHANGE_FILTER');
    expect(response.payload).toEqual('Action');
  });
});

describe('Get Recommendations', () => {
  it('Should return an object containing the action and payload with the movie recommendations', () => {
    const response = getRecommendations(movies);

    expect(response.type).toEqual('GET_RECOMMENDATIONS');
    expect(response.payload).toEqual(movies);
  });
});

describe('No Recommendations', () => {
  it('Should return an object containing the action', () => {
    const response = noRecommendations();

    expect(response.type).toEqual('NO_RECOMMENDATIONS');
  });
});

describe('Movies Not Found', () => {
  it('Should return an object containing the action', () => {
    const response = moviesNotFound();

    expect(response.type).toEqual('MOVIES_NOT_FOUND');
  });
});

describe('Movie Not Found', () => {
  it('Should return an object containing the action', () => {
    const response = movieNotFound();

    expect(response.type).toEqual('MOVIE_NOT_FOUND');
  });
});
