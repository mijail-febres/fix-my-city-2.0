const initialState = {
  filter: ["default"],
};

const filterReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  } else if (action.type === "applyFilter") {
    const newState = { ...state };
    newState.filter = [...action.payload];
    if (newState.filter.length === 0) newState.filter.push('default'); // In case it is empty

    return newState;
  }
  return state;
};

export default filterReducer;
