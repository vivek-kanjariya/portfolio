import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import '../comp/style.css'
import { useState } from "react";



const Nav = () => {
  const[open ,setopen]=useState(true)

  return (
    <nav className="nav">
      <div className="logo">../{"V"}</div>

      <ul className="ull">
        <div
          className="menu"
          onClick={() => {
            setopen(!open);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="disnav" className={open ? "open" : ""}>
          <div className="t">
            <NavLink to="/">
              <li className="li">Home</li>
            </NavLink>
            <NavLink to="/Form">
              <li className="li">Contact</li>
            </NavLink>
            <NavLink to="/About">
              <li className="li">About</li>
            </NavLink>
            <NavLink to="/Clip">
              <li className="li">Connect</li>
            </NavLink>
            {/* <NavLink to="/Project">
              <li className="li">Project</li>
            </NavLink> */}
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
