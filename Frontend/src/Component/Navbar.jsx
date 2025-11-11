import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // ✅ Add listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // ✅ Cleanup when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar bg-base-100 z-100 px-4 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
          sticky ? 'bg-base-300 shadow-md' : ''
        }`}
      >
        {/* LEFT SIDE */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><a href="/">Home</a></li>
              <li><a href="/Course">Course</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl pl-8">BookStore</a>
        </div>

        {/* CENTER MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  pr-8 mr-3">
            <li><a href="/">Home</a></li>
            <li><a href="/Course">Course</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* RIGHT SIDE (Search + Theme + Login) */}
        <div className="navbar-end flex items-center gap-4">
          <label className="input input-bordered flex items-center gap-2 px-3 py-1">
            <svg
              className="h-4 w-4 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow outline-none bg-transparent" placeholder="Search" />
          </label>

          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="light" />
            <svg className="swap-off h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Z" />
            </svg>
            <svg className="swap-on h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14A8.05,8.05,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36A10.14,10.14,0,1,0,22,14.05A1,1,0,0,0,21.64,13Z" />
            </svg>
          </label>

          <a className="btn btn-primary px-4 py-2"><Link to ="/Login">Login</Link></a>
        </div>
      </div>
    </>
  );
}
