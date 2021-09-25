/** @format */

import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export default function login() {
  return (
    <div className='container flex-center flex-col justify-center'>
      <div className='shadow-lg rounded-lg p-6 mb-7'>
        <form className='flex-center flex-col gap-5'>
          <h1 className='text-lg	text-gray-700 text-center mb-10'>LOGIN</h1>
          <input
            name='username'
            type='text'
            placeholder='Username*'
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          />
          <input
            name='password'
            type='password'
            placeholder='Password*'
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          />

          <button type='submit' className='btn mb-5'>
            Get Started
          </button>
          <GoogleAuth />
        </form>
      </div>
      <Link to='/accounts/password/reset/' className='text-gray-500' href=''>
        <p className='text-center'>Forget Password?</p>
      </Link>
    </div>
  );
}
