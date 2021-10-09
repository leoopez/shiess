/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn } from "../../state/actions/FirbaseAuth";

export default function Login() {
  const [emaiInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { register, handleSubmit } = useForm();
  const state = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  const onSubmit = ({ email, password }) => {
    dispatch(signIn(email, password));
    setEmailInput("");
    setPasswordInput("");
  };

  return (
    <div className='container flex-center flex-col justify-center'>
      <div className='shadow-lg rounded-lg p-6 mb-7'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex-center flex-col gap-5'>
          <h1 className='text-lg text-gray-700 text-center mb-10'>LOGIN</h1>
          {state && <h2 className='text-red-600'>*{state}</h2>}
          <input
            {...register("email", { required: true })}
            name='email'
            type='text'
            placeholder='email*'
            value={emaiInput}
            onChange={e => setEmailInput(e.target.value)}
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          />
          <input
            {...register("password", { required: true })}
            name='password'
            type='password'
            placeholder='Password*'
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
            className='font-bold container rounded p-1 bg-gray-100 text-gray-800'
          />

          <button type='submit' className='btn mb-5'>
            Get Started
          </button>
        </form>
      </div>
      <Link to='/accounts/password/reset/' className='text-gray-500' href=''>
        <p className='text-center'>Forget Password?</p>
      </Link>
    </div>
  );
}

