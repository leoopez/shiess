/** @format */
import { combineReducers } from "redux";
import chess from "chess";

const gameReducer = (game = chess.create(), action) => {
  if (action.type === "MOVE") {
    return game;
  }
  return game;
};

const draggablePiece = (piece = null, action) => {
  if (action.type === "START") {
  } else if (action.type === "END") {
  }
  return piece;
};

const reducers = combineReducers({
  gameReducer,
});

export default reducers;
