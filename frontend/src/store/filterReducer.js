const initialState = {
  filter: "default",
};

const filterReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  } else if (action.type === "applyFilter") {
    const newState = { ...state };
    newState.filter = action.payload;
    return newState;
  }
  return state;
};

export default filterReducer;
