/** @format */

import React from "react";

export default function Square({ id, piece, col, row }) {
  return (
    <div
      style={{ gridArea: `${col}${row}` }}
      className={`piece ${piece ? piece : ""}`}></div>
  );
}
