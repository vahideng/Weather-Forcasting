import * as actionTypes from "../actions/actionTypes";
import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log("dsads");
      if (action.payload.data) {
        return [action.payload.data, ...state];
      }
  }
  console.log("Sd");
  return state;
}
