import React from 'react';
import { shallow } from 'enzyme';
import MovieList from '../../containers/MovieList';
import { movies } from '../helper/helper';

const setup = ({
  movies, filter, fetchMovies, clearMovie, clearTrailerId, changeFilter,
}) => shallow(
  <MovieList.WrappedComponent
    movies={movies}
    filter={filter}
    fetchMovies={fetchMovies}
    clearMovie={clearMovie}
    clearTrailerId={clearTrailerId}
    changeFilter={changeFilter}
  />,
);

describe('Movie List container', () => {
  let container;

  beforeEach(() => {
    container = setup({
      movies: {
        movies,
      },
      filter: 'All',
      fetchMovies: () => null,
      clearMovie: () => null,
      clearTrailerId: () => null,
      changeFilter: () => null,
    });
  });

  it('Should render', () => {
    const element = container.find('.movie-list');
    expect(element.length).toEqual(1);
  });
});
