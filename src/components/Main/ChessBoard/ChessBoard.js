/** @format */

import React from "react";
import { useSelector } from "react-redux";

import Square from "./Square";
import "./Chessboard.css";

export default function ChessBoard() {
  const state = useSelector(state => state);
  const squaresInit = state.gameReducer.game.board.squares.map(
    (item, index) => {
      const piece = item.piece
        ? { piece: item.piece.side.name, color: item.piece.type }
        : null;
      return (
        <Square key={index} piece={piece} row={item.rank} col={item.file} />
      );
    }
  );

  return <div className='layout-chessboard'>{squaresInit}</div>;
}
