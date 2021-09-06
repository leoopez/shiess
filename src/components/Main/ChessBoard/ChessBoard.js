/** @format */

import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Square from "./Square";
import "./Chessboard.css";

export default function ChessBoard() {
  const ref = useRef();

  useEffect(() => {
    const handleStartDrag = e => {
      console.log("start");
    };
    const handleDrop = e => {
      e.preventDefault();
      console.log("drop");
    };
    const handleDragOver = e => {
      e.preventDefault();
    };

    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("drop", handleDrop);
    document.addEventListener("dragstart", handleStartDrag);
  }, []);

  useEffect(() => {
    const onDrop = e => {
      e.preventDefault();
    };

    return () =>
      document.removeEventListener("dragstart", onDrop, {
        capture: true,
      });
  });

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

  return (
    <div ref={ref} className='layout-chessboard'>
      {squaresInit}
    </div>
  );
}
