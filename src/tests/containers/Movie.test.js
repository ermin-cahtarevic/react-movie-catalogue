import React from 'react';
import { shallow } from 'enzyme';
import Movie from '../../containers/Movie';
import { movie } from '../helper/helper';

const setup = ({
  movies, match, fetchMovie, fetchTrailerId,
}) => shallow(
  <Movie.WrappedComponent
    movies={movies}
    match={match}
    fetchMovie={fetchMovie}
    fetchTrailerId={fetchTrailerId}
  />,
);

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

describe('Movie container', () => {
  let container;

  beforeEach(() => {
    container = setup({
      movies: {
        movieLoading: false,
        movie,
      },
      match: {
        params: { id: 550 },
      },
      fetchMovie: () => null,
      fetchTrailerId: () => null,
    });
  });

  it('Should render', () => {
    const element = container.find('.movie-page');
    expect(element.length).toEqual(1);

    const img = container.find('.movie-poster');
    expect(img.props().src).toEqual(imgBaseUrl + movie.posterPath);

    const h3 = container.find('.movie-details-title');
    const p = container.find('.movie-details-overview');
    const tagline = container.find('.movie-details-tagline');
    expect(h3.text()).toEqual(movie.title);
    expect(p.text()).toEqual(movie.overview);
    expect(tagline.text()).toEqual(`"${movie.tagline}"`);

    const genres = container.find('.movie-genre-list');
    const genreItems = genres.children('.movie-details-genre');
    expect(genres.length).toEqual(1);
    expect(genreItems.length).toEqual(0);
  });
});
