/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className='container flex-center flex-col justify-center'>
      <div className='shadow-lg rounded-lg p-6 mb-7'>
        <form className='flex-center flex-col gap-5'>
          <h1 className='text-lg	text-gray-700 text-center mb-10'>SIGN UP</h1>
          <input
            name='username'
            type='text'
            placeholder='Username*'
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          />
          <input
            name='email'
            type='email'
            placeholder='email*'
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          />

          <input
            name='password'
            type='password'
            placeholder='Password*'
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          />

          <button type='submit' className='btn mb-5'>
            Login
          </button>
        </form>
      </div>
      <div>
        <span className='signup2'>Already have a account? </span>
        <Link to='/accounts/login' className='text-blue-500 inline' href=''>
          Log In
        </Link>
      </div>
    </div>
  );
}
