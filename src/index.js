/** @format */

// Import React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import gameReducer from "./state/reducers";
import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <Provider store={createStore(gameReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
