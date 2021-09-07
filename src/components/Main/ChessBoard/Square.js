/** @format */

import React from "react";

export default function Square({ piece, col, row }) {
  return (
    <div
      draggable
      id={`${col}${row}`}
      className={`piece ${piece ? piece.color + "-" + piece?.piece : ""}`}
      style={{ gridArea: `${col}${row}` }}></div>
  );
}
