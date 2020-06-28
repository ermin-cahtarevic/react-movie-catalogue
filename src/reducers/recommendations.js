const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS';
const NO_RECOMMENDATIONS = 'NO_RECOMMENDATIONS';

const recommendationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return action.payload;
    case NO_RECOMMENDATIONS:
      return null;
    default: return state;
  }
};

export default recommendationsReducer;
