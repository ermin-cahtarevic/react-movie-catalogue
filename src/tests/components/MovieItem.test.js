import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from '../../components/MovieItem';
import { movie } from '../helper/helper';

const setup = ({ movie, history }) => shallow(
  <MovieItem.WrappedComponent
    movie={movie}
    history={history}
  />,
);

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

describe('Movie Item component', () => {
  let component;

  beforeEach(() => {
    component = setup({
      movie,
      history: {},
    });
  });

  it('Should render', () => {
    const element = component.find('.movie-item');
    expect(element.length).toEqual(1);

    const img = component.find('.movie-item-img');
    expect(img.props().src).toEqual(imgBaseUrl + movie.backdropPath);

    const textBody = component.find('.movie-item-body');
    const h4 = textBody.childAt(0);
    const p = textBody.childAt(1);
    expect(h4.text()).toEqual(movie.title);
    expect(p.text()).toEqual(movie.overview);

    const genres = component.find('.genre-list');
    const genreItems = genres.children('.movie-item-genre');
    expect(genres.length).toEqual(1);
    expect(genreItems.length).toEqual(0);
  });
});
