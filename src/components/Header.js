/** @format */

import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

import { SignOut } from "../state/actions/GoogleAuth";

//icons
import { FaChess, FaBars, FaWindowClose } from "react-icons/fa";

//custom Hooks
import useOnClickOutside from "../hooks/useClickOutside";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector(state => state.GoogleAuthReducer.isSignedIn);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(SignOut);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <div>
      <nav ref={ref}>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center justify-between'>
              <div className='flex-shrink-0'>
                <Link to='/'>
                  <span className='inline-block hover:bg-gray-700 hover:text-white p-1 rounded'>
                    <FaChess size={"2rem"} className='text-gray-600' />
                  </span>
                </Link>
              </div>
              <div className='hidden sm:block'>
                <Navbar login={state} logout={logout} dispatch={dispatch} />
              </div>
            </div>
            <div className='-mr-2 flex sm:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-800 '
                aria-controls='mobile-menu'
                aria-expanded='false'>
                {!isOpen ? (
                  <FaBars size='2rem' className='text-gray-600' />
                ) : (
                  <FaWindowClose size='2rem' className='text-gray-600' />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className='sm:hidden'
            id='mobile-menu'
            onClick={() => setIsOpen(!isOpen)}>
            <Navbar login={state} logout={logout} dispatch={dispatch} />
          </div>
        )}
      </nav>
    </div>
  );
}

const Navbar = ({ login, logout, dispatch }) => {
  return (
    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
      {!login ? (
        <>
          <NavItem to='/chessboard'>Try</NavItem>
          <NavItem to='/accounts/signup'> Sign Up</NavItem>
          <NavItem to='/accounts/login'>Log In</NavItem>
        </>
      ) : (
        <GoogleLogout
          clientId='225445742479-j1749s84rohn277d25mbtq48vsmq6huo.apps.googleusercontent.com'
          buttonText='Logout'
          onLogoutSuccess={logout}
        />
      )}
    </div>
  );
};

const NavItem = ({ to, children }) => {
  return (
    <Link to={to}>
      <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium'>
        {children}
      </li>
    </Link>
  );
};