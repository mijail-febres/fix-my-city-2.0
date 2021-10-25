const initialState = {
  token: "",
};

const tokenReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  } else if (action.type === "getToken") {
    const newState = { ...state };
    newState.token = action.payload;
    return newState;
  }
  return state;
};

export default tokenReducer;
