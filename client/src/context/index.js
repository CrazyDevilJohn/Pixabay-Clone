import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import feedResucer from "./reducers/FeedsReducer";

const myReducer = combineReducers({
  user: userReducer,
  feeds: feedResucer,
});

export default myReducer;
