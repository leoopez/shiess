import React, { useState } from "react"

import CreateSquare from "./SquaresMain"
import Square from "./Square";

export default function ChessBoard() {
    const squaresInit = CreateSquare.map(item => <Square key={item.id} id={item.id} row={item.row} col={item.col} piece={item.piece} onSelect={()=>console.log('click')}/>);
    
    const [squares] = useState(squaresInit);

    return(
        <div className="layout-chessboard">
            {squares}
        </div>
    )
}