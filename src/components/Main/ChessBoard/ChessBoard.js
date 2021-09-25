/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import Square from "./Square";
import "./Chessboard.css";

export default function ChessBoard() {
  const [pieceOnSelect, setPieceOnSelect] = useState(null);
  // const [squaresToMove, setSquaresToMove] = useState([]);

  const state = useSelector(state => state);
  console.log(state);
  console.log(pieceOnSelect);

  const handleStartDrag = useCallback(e => {
    if (!e.target.closest(".piece")) return;
    setPieceOnSelect(e.target.id);

    e.dataTransfer.setData("text/plain", e.target.classList);
    e.dataTransfer.effectAllowed = "move";
  }, []);

  const handleDrop = useCallback(e => {
    e.preventDefault();
    e.target.classList = e.dataTransfer.getData("text");
  }, []);

  const handleDragOver = useCallback(e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  useEffect(() => {
    document.addEventListener("dragover", handleDragOver, { capture: true });
    document.addEventListener("dragstart", handleStartDrag, { capture: true });
    document.addEventListener("drop", handleDrop, { capture: true });

    return () => {
      document.removeEventListener("dragover", handleDragOver, {
        capture: true,
      });
      document.removeEventListener("dragstart", handleStartDrag, {
        capture: true,
      });
      document.removeEventListener("drop", handleDrop, { capture: true });
    };
  }, [handleDragOver, handleDrop, handleStartDrag]);

  const squaresInit = state.game.board.squares.map((item, index) => {
    const piece = item.piece ? { ...item.piece } : null;
    return <Square key={index} piece={piece} row={item.rank} col={item.file} />;
  });

  return <div className='layout-chessboard'>{squaresInit}</div>;
}
