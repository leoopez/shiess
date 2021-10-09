/** @format */

// Import React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./state/reducers";
import App from "./components/App";
import "./index.css";

import {
  signUpMiddleware,
  signInMiddleware,
} from "./state/middleware/FirebaseAuth";

import app from "./firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(signUpMiddleware, signInMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
