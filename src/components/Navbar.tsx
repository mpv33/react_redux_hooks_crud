import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          React Redux Hooks CRUD | Home
        </Link>
        <Link to={"/contact"} className="navbar-brand ml-5">
           Contact Book | CRUD
        </Link>
        {/* <Link to={"/tutorial"} className="navbar-brand ml-5">
           Tutorial | CRUD
        </Link> */}
        <Link to={"/admin"} className="navbar-brand ml-5">
           Admin UI | CRUD
        </Link>
        <Link to={"/unauth"} className="navbar-brand ml-5">
           UnProtected Page
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;