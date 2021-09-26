/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import GoogleAuth from "./GoogleAuth";
import FirebaseAuth from "./FirebaseAuth";

export default function Login() {
  const state = useSelector(state => state.GoogleAuthReducer.isSignedIn);

  console.log(state);
  if (state) return <div>Already Log In</div>;

  return (
    <div className='container flex-center flex-col justify-center'>
      <div className='shadow-lg rounded-lg p-6 mb-7'>
        <form className='flex-center flex-col gap-5'>
          <FirebaseAuth />
          <GoogleAuth />
        </form>
      </div>
      <Link to='/accounts/password/reset/' className='text-gray-500' href=''>
        <p className='text-center'>Forget Password?</p>
      </Link>
    </div>
  );
}

