import recommendationsReducer from '../../reducers/recommendations';
import { noRecommendations } from '../../actions';

describe('Recommendations Reducer', () => {
  it('Should return the default state', () => {
    const state = recommendationsReducer(undefined, {});

    expect(state).toEqual([]);
  });

  it('Should return null if no recommendations found', () => {
    const action = noRecommendations();
    const state = recommendationsReducer(undefined, action);

    expect(state).toEqual(null);
  });
});
