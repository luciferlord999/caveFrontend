import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./Reducer/userReducer";

const rootReducer = combineReducers({
  userList: userReducer,
});
const middleware = [thunk];

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
