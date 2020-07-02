import moviesReducer from '../../reducers/movies';
import {
  getMovies, getMovie, clearMovie, getTrailerId, clearTrailerId, moviesNotFound, movieNotFound,
} from '../../actions';
import { movies, movie } from '../helper/helper';

const initialState = {
  moviesLoading: true,
  movies: [],
  movieLoading: true,
  movie: {},
  trailerId: null,
};

describe('Movies Reducer', () => {
  it('Should return the default state', () => {
    const state = moviesReducer(undefined, {});

    expect(state).toEqual(initialState);
  });

  it('Should return new state if valid movies are provided', () => {
    const action = getMovies(movies);
    const state = moviesReducer(undefined, action);

    expect(state.movies).toEqual([...movies]);
    expect(state.moviesLoading).toEqual(false);
  });

  it('Should return new state if a valid movie is provided', () => {
    const action = getMovie(movie);
    const state = moviesReducer(undefined, action);

    expect(state.movie).toEqual(movie);
    expect(state.moviesLoading).toEqual(true);
    expect(state.movieLoading).toEqual(false);
  });

  it('Should clear movie from state', () => {
    const action = clearMovie();
    const state = moviesReducer(undefined, action);

    expect(state.movie).toEqual({});
    expect(state.movieLoading).toEqual(true);
  });

  it('Should return new state with trailer ID', () => {
    const action = getTrailerId(550);
    const state = moviesReducer(undefined, action);

    expect(state.trailerId).toEqual(550);
  });

  it('Should remove trailer ID from the state', () => {
    const action = clearTrailerId();
    const state = moviesReducer(undefined, action);

    expect(state.trailerId).toEqual(null);
  });

  it('Should return new state with movies set to null', () => {
    const action = moviesNotFound();
    const state = moviesReducer(undefined, action);

    expect(state.movies).toEqual(null);
    expect(state.moviesLoading).toEqual(false);
  });

  it('Should return new state with movie set to null', () => {
    const action = movieNotFound();
    const state = moviesReducer(undefined, action);

    expect(state.movie).toEqual(null);
    expect(state.movieLoading).toEqual(false);
  });
});
