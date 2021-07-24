import React from "react"

class Piece extends React.Component{
    render(){
        return(
            <div className={`piece ${this.props.piece}`} >

            </div>
        )
    }
}

export default Piece