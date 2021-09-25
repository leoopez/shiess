/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Main/Main";

import Header from "./Header";
import Home from "./Home";
import Login from "./Account/Login";
import Signup from "./Account/SignUp";
import ForgetPassword from "./Account/ForgetPassWord";

export default function App() {
  return (
    <div className='App px-10 py-6'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/chessboard' exact element={<Main />}></Route>
          <Route path='/accounts/login' exact element={<Login />}></Route>
          <Route path='/accounts/signup' exact element={<Signup />}></Route>
          <Route
            path='/accounts/password/reset'
            exact
            element={<ForgetPassword />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
