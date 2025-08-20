import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logos from "../assets/logo.webp";
import { CreatContext } from "./ContextApiSet/Context";
import { Sun, Moon } from "lucide-react"; // icons

const Nav = () => {
  const {user,logOuts} = useContext(CreatContext)




// Theme All funcanality
const themes = ["light", "dark"];
  const [theme, setTheme] = useState("light");
  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle between themes
  const toggleTheme = () => {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };


// theme end





  const link = (
    <>
      <li className="text-base text-red-600 font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base text-red-600 font-bold">
        <NavLink to="/hospital">Animal hospital</NavLink>
      </li>
      <li className="text-base text-red-600 font-bold">
        <NavLink to="/items">Accessories Iteam</NavLink>
      </li>
      <li className="text-base text-red-600 font-bold">
        <NavLink to="/success">Adpot Cart</NavLink>
      </li>
      <li className="text-base text-red-600 font-bold">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  ); 
  return (
    <div className="navbar px-8 w-full fixed top-0 left-0 z-30 bg-base-100 shadow-md">
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
        <ul className="menu menu-horizontal px-1 gap-5">{link}</ul>
      </div>
      <div className="navbar-end gap-2">
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
        <Link className="bg-slate-400 px-2 py-2 rounded-md text-black font-medium" to='/login' onClick={logOuts}>Login</Link>
        }
        {/* profile End*/}

         {/* Theme Controll start */}
      <div>
        <button
        onClick={toggleTheme}
        className="p-3 rounded-full shadow-md bg-gray-200  transition hover:scale-110"
      >
        {theme === "light" && <Sun size={15} className="text-yellow-700" />}
        {theme === "dark" && <Moon size={15} className="text-gray-700" />}
      </button>
      </div>
      {/* Theme Controll end */}
      </div>
     
    </div>
  );
};

export default Nav;
