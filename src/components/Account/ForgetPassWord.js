/** @format */

import React from "react";
import { useForm } from "react-hook-form";

export default function ForgetPassword() {
  const { handleSubmit } = useForm();
  return (
    <div className='container flex-center justify-center'>
      <div className='shadow-lg rounded-lg p-6'>
        <form
          onSubmit={handleSubmit(formData => {
            console.log(formData);
          })}
          className='flex-center flex-col gap-5'>
          <h1 className='text-lg	text-gray-700 text-center mb-10'>
            RESET PASSWORD
          </h1>
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
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
