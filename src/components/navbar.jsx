/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  console.log("navbar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
