import React from "react";

const files = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
};

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
      // id={`square-${id}`}
      style={{ gridColumn: files[row], gridRow: Math.abs(9 - col) }}
      className={`piece ${piece ? piece : ""} ${selected ? "selected" : ""}`}
      onClick={() => onSelect(id)}
    ></div>
  );
}
