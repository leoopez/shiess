/** @format */

import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  SET_CURRENT_USER,
  SET_ERROR,
} from "./actionTypes";

export const signUp = (email, password) => {
  return {
    type: SIGN_UP,
    payload: {
      email,
      password,
    },
  };
};

export const signIn = (email, password) => {
  return {
    type: SIGN_IN,
    payload: {
      email,
      password,
    },
  };
};

export const setUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const signOut = {
  type: SIGN_OUT,
};

export const setError = error => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
