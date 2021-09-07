/** @format */

import React from "react";
import { useSelector } from "react-redux";
import useDragPiece from "../../../hooks/useDrag";

import Square from "./Square";
import "./Chessboard.css";

export default function ChessBoard() {
  useDragPiece();
  const state = useSelector(state => state);
  const squaresInit = state.gameReducer.game.board.squares.map(
    (item, index) => {
      const piece = item.piece
        ? { piece: item.piece.type, color: item.piece.side.name }
        : null;
      return (
        <Square key={index} piece={piece} row={item.rank} col={item.file} />
      );
    }
  );

  return <div className='layout-chessboard'>{squaresInit}</div>;
}
