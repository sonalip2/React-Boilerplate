import { combineReducers } from "redux";
import todos from "./reducer_blog";

var reducers = {
    blogs: todos,
  };
  var reducer = combineReducers(reducers);
  export default reducer;