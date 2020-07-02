import React from 'react';
import { shallow } from 'enzyme';
import Recommendations from '../../components/Recommendations';

const setup = ({ id, recommendations, fetchRecommendations }) => shallow(
  <Recommendations.WrappedComponent
    id={id}
    recommendations={recommendations}
    fetchRecommendations={fetchRecommendations}
  />,
);

describe('Recommendations component', () => {
  let component;

  beforeEach(() => {
    component = setup({
      id: 550,
      recommendations: [],
      fetchRecommendations: () => null,
    });
  });

  it('Should render', () => {
    const element = component.find('.recommendations');
    expect(element.length).toEqual(1);

    const header = element.find('.recommendations-header');
    expect(header.text()).toEqual('Recommendations');

    const list = element.find('.recommendations-list');
    expect(list.text()).toEqual('No recommendations found.');
  });
});
