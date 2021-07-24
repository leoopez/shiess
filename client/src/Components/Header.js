import React from "react"
// import Square from "./Square";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            navEle: null
        }
    }

    render(){
        return (
            <header>
                {/*<nav>*/}
                {/*    <h2>ChessOnlineBase</h2>*/}
                {/*    <div className="nav-masthead">*/}
                {/*        <a className="nav-link active" aria-current="page" href="/">Home</a>*/}
                {/*        <a className="nav-link" href="">About</a>*/}
                {/*        <a className="nav-link" href="">Login</a>*/}
                {/*        <a className="nav-link" href="">Register</a>*/}
                {/*    </div>*/}
                {/*</nav>*/}
            </header>
        )
    }
}

export default Header