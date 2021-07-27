import React from "react"

export default function Square({ id, piece, col, row, onSelct=f=>f }) {

    return(
        <div
             id={`square-${id}`}
             style={{gridColumn: col, gridRow: row}}
             className={ `piece ${piece ? piece : ""}`.trim() }>
        </div>
    )
}