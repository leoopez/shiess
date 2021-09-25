/** @format */

import React from "react";

export default function Square({ piece, col, row }) {
  return (
    <div
      draggable={piece ? true : false}
      id={`${col}${row}`}
      className={`piece ${piece ? piece.side.name + "-" + piece.type : ""}`}
      style={{ gridArea: `${col}${row}` }}></div>
  );
}
