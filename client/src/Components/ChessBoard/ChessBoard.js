import React, { useState } from "react";

//API to validate chess moves by the user (https://github.com/brozeph/node-chess)
import chess from "chess";

import Square from "./Square";

// const board = chess.Board();
// console.log(board);

export default function ChessBoard() {
  const [chessBoard, setchessBoard] = useState(chess.create());
  const [firstClick, setFirstCLick] = useState(null);

  // console.log(chessBoard);
  const onSelect = (id) => {
    //get Square Object with id
    const square = chessBoard.game.board.squares[id];

    //If is the start of a move(touch a piece)
    if (!firstClick) {
      //find if is a posible valid move
      const validSquare = chessBoard.validMoves.find(
        (sqr) => sqr.src === square
      );

      // set the start of a move
      if (validSquare) {
        setFirstCLick(validSquare);
      }
    } else {
      // check if is a valid destination of the selected piece
      const validSquare = firstClick.squares.find((sqr) => sqr === square);

      if (validSquare) {
        const move = Object.keys(chessBoard.notatedMoves).find((key, index) => {
          // console.log(
          //   chessBoard.notatedMoves[key],
          //   validSquare,
          //   firstClick.src
          // );
          return (
            chessBoard.notatedMoves[key].dest === validSquare &&
            chessBoard.notatedMoves[key].src === firstClick.src
          );
        });
        console.log(move);
        chessBoard.move(move);
      }
      setFirstCLick(null);
    }
  };

  const squaresInit = chessBoard.game.board.squares.map((item, index) => {
    const piece = `${item.piece ? item.piece.side.name : null}-${
      item.piece ? item.piece.type : null
    }`;

    return (
      <Square
        id={index}
        key={index}
        piece={piece}
        row={item.file}
        col={item.rank}
        selected={item === firstClick?.src}
        onSelect={onSelect}
      />
    );
  });

  return <div className="layout-chessboard">{squaresInit}</div>;
}
