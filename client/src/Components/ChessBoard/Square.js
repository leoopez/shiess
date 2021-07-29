import React from "react";

export default function Square({
  id,
  piece,
  col,
  row,
  selected,
  onSelect = (f) => f,
}) {
  return (
    <div
      id={`square-${id}`}
      style={{ gridColumn: col, gridRow: row }}
      className={`piece ${piece ? piece : ""} ${
        selected ? "selected" : ""
      }`.trim()}
      onClick={() => onSelect(id)}
    ></div>
  );
}
