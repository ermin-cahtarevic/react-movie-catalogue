import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../components/Search';

const setup = () => shallow(<Search />);

function mockFunctionDispatch() {
  const original = require.requireActual('react-redux');
  return {
    ...original,
    useDispatch: jest.fn(),
  };
}

jest.mock('react-redux', () => mockFunctionDispatch());

describe('Search component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.search-form');
    expect(element.length).toEqual(1);
  });
});
