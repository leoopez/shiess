import React from "react"
import CreateSquare from "./SquaresMain"

import Square from "./Square";

class ChessBoard extends React.Component{
    constructor() {
        super();
        this.state = {
            todos: CreateSquare
        }
    }

    render(){
        const squares = this.state.todos.map(item => <Square key={item.id} id={item.id} row={item.row} col={item.col} piece={item.piece}/>)
        return(
            <div className="layout-chessboard">
                {squares}
            </div>
        )
    }
}

export default ChessBoard