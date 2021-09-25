/** @format */

const INITIAL_STATE = {
  isSignedIn: null,
};

export default function GoogleAuthReducer(state = INITIAL_STATE, action) {
  switch (action) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
}