/** @format */

import React from "react";
import { GoogleLogin } from "react-google-login";

import { useDispatch, useSelector } from "react-redux";

import { SignIn } from "../../state/actions/GoogleAuth";

export default function GoogleAuth() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const responseGoogle = response => {
    dispatch(SignIn);
  };

  console.log(state);

  return (
    <div className='flex-center flex-col google-auth'>
      <div className='mb-4'>Or Connect With</div>
      <GoogleLogin
        clientId='225445742479-j1749s84rohn277d25mbtq48vsmq6huo.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
