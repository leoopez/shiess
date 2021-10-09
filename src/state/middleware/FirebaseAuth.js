/** @format */

import "firebase/auth";

import { SIGN_UP, SIGN_IN } from "../actions/actionTypes";
import { setUser, setError } from "../actions/FirbaseAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signUpMiddleware =
  ({ dispatch }) =>
  next =>
  action => {
    if (action.type === SIGN_UP) {
      const auth = getAuth();
      const { email, password } = action.payload;
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed up
          const user = userCredential.user;
          dispatch(setUser(user.email));
        })
        .catch(error => {
          dispatch(setError(error.code));
        });
    }
    next(action);
  };

export const signInMiddleware =
  ({ dispatch }) =>
  next =>
  action => {
    if (action.type === SIGN_IN) {
      const auth = getAuth();
      const { email, password } = action.payload;
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed up
          const user = userCredential.user;
          dispatch(setUser(user.email));
        })
        .catch(error => {
          dispatch(setError(error.code));
        });
    }
    next(action);
  };
