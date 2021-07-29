import React from "react";

import ChessBoard from "./Components/ChessBoard/ChessBoard";
import Header from "./Components/Header";

import './index.css';

export default function App(){
    return(
        <div className="App">
            <Header />
            <ChessBoard />
        </div>
    )
}