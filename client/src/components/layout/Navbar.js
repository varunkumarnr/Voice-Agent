import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-robot' /> Falcon
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/help'> help </Link>
        </li>
        <li>
          <Link to='/signup'>Signup </Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
