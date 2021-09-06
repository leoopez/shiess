/** @format */

import React, { useEffect, useRef } from "react";

import bP from "./../../../static/img/chessboard/bP.png";
import bR from "./../../../static/img/chessboard/bR.png";
import bN from "./../../../static/img/chessboard/bK.png";
import bB from "./../../../static/img/chessboard/bB.png";
import bQ from "./../../../static/img/chessboard/bQ.png";
import bK from "./../../../static/img/chessboard/bK.png";

import wP from "./../../../static/img/chessboard/wP.png";
import wR from "./../../../static/img/chessboard/wR.png";
import wN from "./../../../static/img/chessboard/wK.png";
import wB from "./../../../static/img/chessboard/wB.png";
import wQ from "./../../../static/img/chessboard/wQ.png";
import wK from "./../../../static/img/chessboard/wK.png";

const pieces = {
  bP,
  bR,
  bN,
  bB,
  bK,
  bQ,
  wP,
  wB,
  wN,
  wR,
  wQ,
  wK,
};

export default function Square({ piece, col, row }) {
  // const [dragable, setDragable] = useState(null);

  return (
    <div
      draggable={piece ? true : false}
      className={piece ? "piece" : "empty"}
      style={{ gridArea: `${col}${row}` }}>
      {piece && (
        <img
          className='piece-img'
          src={pieces[`${piece.piece[0]}${piece.color[0].toUpperCase()}`]}
          alt={`${piece.piece[0]}${piece.color[0].toUpperCase()}`}></img>
      )}
    </div>
  );
}
