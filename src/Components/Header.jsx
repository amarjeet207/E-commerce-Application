import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import cart from "../assets/cart.svg";

const Header = () => {
  return (
    <div>
      <div
        className="max-w-screen grid grid-rows-2 
      border-b-1 border-zinc-400  "
      >
        <Link to="/">
          <h1 className="justify-self-center w-full text-center p-1 text-2xl text-pink-400 
          font-bold font-serif cursor-pointer border-zinc-400 border-b-1">ShoppyGlobe</h1>
        </Link>

        <ul
          className="flex flex-row justify-around items-center
         text-zinc-500 font-serif border-zinc-400">
          <li className="cursor-pointer m-0 p-0"><NavLink to='/'>Home</NavLink></li>
          <li className="cursor-pointer m-0 p-0"><NavLink to='/category'>Men</NavLink></li>
          <li className="cursor-pointer m-0 p-0"><NavLink to='/category'>Women</NavLink></li>
          <li className="cursor-pointer m-0 p-0"><NavLink to='/category'>Beauty</NavLink></li>
          <li className="cursor-pointer m-0 p-0"><NavLink to='/category'>Electronics</NavLink></li>
          <li className="cursor-pointer m-0 p-0">
           <Link to='/cart'> <img src={cart} /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
