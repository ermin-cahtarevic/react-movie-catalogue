import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';

const setup = () => shallow(<Navbar />);

function mockFunctionLocation() {
  const original = require.requireActual('react-router-dom');
  return {
    ...original,
    useLocation: jest.fn().mockReturnValue({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: '5nvxpbdafa',
    }),
  };
}

jest.mock('react-router-dom', () => mockFunctionLocation());

function mockFunctionDispatch() {
  const original = require.requireActual('react-redux');
  return {
    ...original,
    useDispatch: jest.fn(),
  };
}

jest.mock('react-redux', () => mockFunctionDispatch());

describe('Navbar component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.navbar');
    expect(element.length).toEqual(1);
  });
});
