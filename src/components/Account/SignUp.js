/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { signUp } from "../../state/actions/FirbaseAuth";

export default function SignUp() {
  const [emaiInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth.error);

  const onSubmit = ({ email, password }) => {
    dispatch(signUp(email, password));
    setEmailInput("");
    setPasswordInput("");
  };

  return (
    <div className='container flex-center flex-col justify-center'>
      <div className='shadow-lg rounded-lg p-6 mb-7'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex-center flex-col gap-5'>
          <h1 className='text-lg	text-gray-700 text-center mb-10'>SIGN UP</h1>

          {state && <h2 className='text-red-600'>*{state}</h2>}
          {/* <input
            {...register("username", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
            name='username'
            type='text'
            placeholder='Username*'
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          /> */}
          <input
            {...register("email", { required: true })}
            name='email'
            type='email'
            value={emaiInput}
            onChange={e => setEmailInput(e.target.value)}
            placeholder='email*'
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          />

          <input
            {...register("password", { required: true, maxLength: 20 })}
            name='password'
            type='password'
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
            placeholder='Password*'
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          />

          <button type='submit' className='btn mb-5'>
            Sign Up
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
