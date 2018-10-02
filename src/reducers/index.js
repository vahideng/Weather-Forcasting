import { combineReducers } from "redux";
import fetchDataReducer from "../reducers/reducer-fetchData";
const rootReducer = combineReducers({
  weather: fetchDataReducer
});

export default rootReducer;
