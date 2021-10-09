/** @format */
import { combineReducers } from "redux";

import FirebaseAuthReducer from "./FirebaseAuth";

const reducers = combineReducers({
  auth: FirebaseAuthReducer,
});

export default reducers;
