/** @format */
// import { com/bineReducers } from "redux";
import chess from "chess";

const gameReducer = (game = chess.create(), action) => {
  if (action.type === "MOVE") {
    return game;
  }
  return game;
};

export default gameReducer;
