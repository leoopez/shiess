/** @format */
import { SET_CURRENT_USER, SET_ERROR } from "../actions/actionTypes";

const INITIAL_STATE = {
  isSignedIn: null,
  currentUser: null,
  token: null,
  error: null,
};

export default function FirebaseAuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        error: null,
        isSignedIn: true,
        currentUser: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
