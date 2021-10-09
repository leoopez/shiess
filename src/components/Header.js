/** @format */

import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import { signOut } from "../state/actions/FirbaseAuth";

//icons
import { FaChess, FaBars, FaWindowClose } from "react-icons/fa";

//custom Hooks
import useOnClickOutside from "../hooks/useClickOutside";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const login = useSelector(state => state.auth.isSignedIn);
  const dispatch = useDispatch();

  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <div>
      <nav ref={ref}>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between w-full'>
            <div className=''>
              <Link to='/'>
                <span className='inline-block hover:bg-gray-700 hover:text-white p-1 rounded'>
                  <FaChess size={"2rem"} />
                </span>
              </Link>
            </div>
            <div className='hidden sm:block'>
              <div className='flex items-center px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {!login ? (
                  <>
                    <NavItem to='/chessboard'>Try</NavItem>
                    <NavItem to='/accounts/signup'>Sign Up</NavItem>
                    <NavItem to='/accounts/login'>Log In</NavItem>
                  </>
                ) : (
                  <>
                    <NavItem to='/chessboard'>Up Game</NavItem>
                    <NavItem to='/accounts/login'>Log In</NavItem>
                    <NavItem to='/accounts/signup'>Sign Up</NavItem>
                  </>
                )}
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
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              {!login ? (
                <>
                  <NavItem to='/chessboard'>Try</NavItem>
                  <NavItem to='/accounts/login'>Log In</NavItem>
                  <NavItem to='/accounts/signup'>Sign Up</NavItem>
                </>
              ) : (
                <>
                  <NavItem to='/chessboard'>Up Game</NavItem>
                  <NavItem to='/accounts/login'>Log In</NavItem>
                  <NavItem to='/accounts/signup'>Sign Up</NavItem>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

const NavItem = ({ to, children }) => {
  return (
    <Link to={to}>
      <li className='nav--item'>{children}</li>
    </Link>
  );
};