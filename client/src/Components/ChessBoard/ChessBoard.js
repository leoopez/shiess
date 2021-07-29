import React, { useState } from "react";

import CreateSquare from "./SquaresMain";
import Square from "./Square";

export default function ChessBoard() {
  const [squares, setSquares] = useState({
    chessBoard: CreateSquare,
    status: { pieceOnClick: null, lastPieceOnClick: null },
  });

  const onSelect = (id) => {
    // if (!squares.chessBoard[squares.status.pieceOnClick].piece) return;
    let newSquares = [...squares.chessBoard];
    let newStatus = { ...squares.status };

    newSquares[id].selected = true;
    if (squares.status.pieceOnClick) {
      newSquares[id].piece = newSquares[squares.status.pieceOnClick].piece;

      newSquares[squares.status.pieceOnClick].selected = false;
      newSquares[squares.status.pieceOnClick].piece = null;
      newStatus.pieceOnClick = null;
    } else {
      newStatus.pieceOnClick = id;
    }
    setSquares({ chessBoard: newSquares, status: newStatus });
  };

  const squaresInit = squares.chessBoard.map((item) => (
    <Square
      key={item.id}
      id={item.id}
      row={item.row}
      col={item.col}
      piece={item.piece}
      selected={item.selected}
      onSelect={onSelect}
    />
  ));
  return <div className="layout-chessboard">{squaresInit}</div>;
}
