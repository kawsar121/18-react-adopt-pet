import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logos from "../assets/logo.webp";
import { CreatContext } from "./ContextApiSet/Context";

const Nav = () => {
  const {user,logOuts} = useContext(CreatContext)
  const link = (
    <>
      <li className="text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/success">Adpot Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <div className="flex gap-3">
          <img src={logos} alt="" />
          <p className="text-xl">Peddy</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {/* profile  start*/}
        {
          user? <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
               <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
            </div>
          </div>  
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            {
              user? <li>
              <button onClick={logOuts}>log out</button>
            </li> : ''
            }
          </ul>
        </div>
        :
        <Link className="btn btn-active" to='/login' onClick={logOuts}>Login</Link>
        }
        {/* profile End*/}
      </div>
    </div>
  );
};

export default Nav;
