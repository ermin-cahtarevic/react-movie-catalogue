const GET_RECOMENDATIONS = 'GET_RECOMENDATIONS';

const recomendationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RECOMENDATIONS:
      return action.payload;
    default: return state;
  }
};

export default recomendationsReducer;
