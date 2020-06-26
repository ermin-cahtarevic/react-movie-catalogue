const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS';

const recommendationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return action.payload;
    default: return state;
  }
};

export default recommendationsReducer;
