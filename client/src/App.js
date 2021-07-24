import ChessBoard from "./Components/ChessBoard";
import Header from "./Components/Header";
import React from "react";
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Header />
                <div className={"container"}>
                    <ChessBoard />
                </div>
            </div>
        )
    }
}

export default App;