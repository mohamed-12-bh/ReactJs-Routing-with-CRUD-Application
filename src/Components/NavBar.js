import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          React User
        </NavLink>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-outline-light " to="/users/add">
            Add User
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
