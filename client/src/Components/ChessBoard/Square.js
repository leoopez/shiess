import React from "react";

export default function Square({
  id,
  piece,
  col,
  row,
  selected,
  lastSelected,
  onSelect = (f) => f,
}) {
  return (
    <div
      id={`square-${id}`}
      style={{ gridColumn: col, gridRow: row }}
      className={`piece ${piece ? piece : ""} ${selected ? "selected" : ""} ${
        lastSelected ? "last-selected" : ""
      }`.trim()}
      onClick={() => onSelect(id)}
    ></div>
  );
}
