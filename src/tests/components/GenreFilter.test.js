import React from 'react';
import { shallow } from 'enzyme';
import GenreFilter from '../../components/GenreFilter';

const setup = ({ changeFilter }) => shallow(<GenreFilter changeFilter={changeFilter} />);

describe('Genre Filter component', () => {
  let component;

  beforeEach(() => {
    component = setup({
      changeFilter: () => null,
    });
  });

  it('Should render', () => {
    const element = component.find('.genre-filter');
    const options = component.find('option');
    expect(element.length).toEqual(1);
    expect(options.length).toEqual(20);
  });
});
