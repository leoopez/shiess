/** @format */

import React from "react";

import "./Chessboard.css";
//API to validate chess moves by the user (https://github.com/brozeph/node-chess)
import chess from "chess";
import Square from "./Square";

const game = chess.create();
console.log(game);
export default function ChessBoard() {
  const squaresInit = game.game.board.squares.map((item, index) => {
    const piece = `${item.piece ? item.piece.side.name : null}-${
      item.piece ? item.piece.type : null
    }`;
    console.log(item);
    return (
      <Square
        id={index}
        key={index}
        piece={piece}
        row={item.rank}
        col={item.file}
      />
    );
  });

  return <div className='layout-chessboard'>{squaresInit}</div>;
}
