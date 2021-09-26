/** @format */

import React from "react";

export default function FirebaseAuth() {
  return (
    <>
      <h1 className='text-lg text-gray-700 text-center mb-10'>LOGIN</h1>
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
    </>
  );
}
