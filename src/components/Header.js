/** @format */

import React, { useState, useRef } from "react";

import useOnClickOutside from "../hooks/useClickOutside";

import { Link } from "react-router-dom";
import { FaChess, FaBars, FaWindowClose } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
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
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link to='/chessboard'>
                    <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Try
                    </li>
                  </Link>
                  <Link to='/accounts/signup'>
                    <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Sign Up
                    </li>
                  </Link>
                  <Link to='/accounts/login'>
                    <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Log In
                    </li>
                  </Link>
                </div>
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
              <Link to='/chessboard'>
                <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium'>
                  Try
                </li>
              </Link>
              <Link to='/accounts/signup'>
                <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium'>
                  Sign Up
                </li>
              </Link>
              <Link to='/accounts/login'>
                <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium'>
                  Log In
                </li>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
