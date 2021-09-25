/** @format */

import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { SignIn, SignOut } from "../../state/actions/GoogleAuthActions";

export default function GoogleAuth() {
  const [auth, setAuth] = useState();
  const [isSignedIn, setSignedIn] = useState(null);

  const dispatch = useDispatch();

  const { SignInDispatch, SignOutDispatch } = bindActionCreators(
    { SignIn, SignOut },
    dispatch
  );

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            "225445742479-j1749s84rohn277d25mbtq48vsmq6huo.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
        });
    });
  }, []);

  useEffect(() => {
    auth?.isSignedIn.listen(setSignedIn(auth.isSignedIn));
  }, [auth]);

  const signIn = () => {
    if (isSignedIn) return;
    auth.signIn();
  };

  return (
    <div className='flex-center flex-col google-auth'>
      <div className='mb-4'>Or Connect With</div>
      <FcGoogle size='2rem' onClick={signIn} />
    </div>
  );
}
