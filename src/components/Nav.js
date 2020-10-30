import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/spring">Spring</NavLink>
        </li>
        <li>
          <NavLink to="/summer">Summer</NavLink>
        </li>
        <li>
          <NavLink to="/autumn">Autumn</NavLink>
        </li>
        <li>
          <NavLink to="/winter">Winter</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
