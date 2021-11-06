const initialState = {
  selectedItems: [],
};

const reportReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  } else if (action.type === "setItems") {
    const newState = {...state };
    newState.selectedItems = [...action.payload];
    return newState;
  }
  return state;
};

export default reportReducer;
