/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className='container flex-center justify-center'>
      <div className='shadow rounded-lg p-6'>
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

          <Link to='/accounts/login' className='text-gray-500' href=''>
            <p className='signup2'>Already have a account?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
