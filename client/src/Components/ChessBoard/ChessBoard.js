import React, { useState } from "react";

import CreateSquare from "./SquaresMain";
import Square from "./Square";

export default function ChessBoard() {
  const [chessBoard, setchessBoard] = useState(CreateSquare);
  const [pieceOnClick, setPieceOnClick] = useState(null);
  const [lastPieceOnClick, setLastPieceOnClick] = useState(null);

  const onSelect = (id) => {
    console.log("In Construction");
    // if (!chessBoard[id].piece) return;
    //   let newSquares = [...chessBoard];
    //   if (pieceOnClick) {
    //     newSquares[id].piece = newSquares[pieceOnClick].piece;
    //     newSquares[id].lastMove = true;
    //     newSquares[pieceOnClick].lastMove = true;
    //     newSquares[pieceOnClick].selected = false;
    //     newSquares[pieceOnClick].piece = null;
    //     if (lastPieceOnClick) {
    //       newSquares[lastPieceOnClick[0]].lastMove = false;
    //       newSquares[lastPieceOnClick[0]].lastMove = false;
    //     }
    //     setLastPieceOnClick([id, pieceOnClick]);
    //     setPieceOnClick(null);
    //   } else {
    //     newSquares[id].selected = true;
    //     setPieceOnClick(id);
    //   }
    //   setchessBoard(newSquares);
  };

  const squaresInit = chessBoard.map((item) => (
    <Square
      key={item.id}
      id={item.id}
      row={item.row}
      col={item.col}
      piece={item.piece}
      selected={item.selected}
      onSelect={onSelect}
      lastSelected={item.lastMove}
    />
  ));
  return <div className="layout-chessboard">{squaresInit}</div>;
}
