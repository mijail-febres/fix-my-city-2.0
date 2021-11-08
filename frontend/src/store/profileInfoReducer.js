const initialState = {
  info: {
    avatar: "",
    userName: "",
    dateJoined: "",
    points: "",
    level: "",
    issuesReported: "",
    issuesUpvoted: "",
    email: "",
    firstName: "",
    lastName: "",
    homeAddress: "",
    homeLatitude: "",
    homeLongitude:""
  },
};

const profileInfoReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  } else if (action.type === "updateProfileInfo") {
    const newState = { ...state };
    newState.info = action.payload;
    return newState;
  }
  return state;
};

export default profileInfoReducer;
