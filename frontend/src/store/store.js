import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createIssueCoordinatesReducer from "./createIssueCoordinatesReducer";
import profileInfoReducer from "./profileInfoReducer";
import filterReducer from "./filterReducer";
import tokenReducer from "./tokenReducer";

const middleware = [thunk];

const reducers = combineReducers({
  createIssueCoordinatesReducer,
  profileInfoReducer,
  filterReducer,
  tokenReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
