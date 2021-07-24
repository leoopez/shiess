import React from "react"

class Square extends React.Component{
    render(){
        const pieceClassName = (this.props.piece) ? ` ${this.props.piece}`: "";
        const divStyle = {
            gridColumn: this.props.col,
            gridRow: this.props.row,
        };

        return(
            <div
                id={`square-${this.props.id}`}
                style={divStyle}
                className={`piece${pieceClassName}`}>
            </div>
        )
    }
}

export default Square