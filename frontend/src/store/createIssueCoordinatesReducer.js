const initialState = {
  coordinates: { longitude: 0, latitude: 0 },
};

const createIssueCoordinatesReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  } else if (action.type === "setCoordinates") {
    const newState = { ...state };
    newState.coordinates = action.payload;
    return newState;
  }
  return state;
};

export default createIssueCoordinatesReducer;
