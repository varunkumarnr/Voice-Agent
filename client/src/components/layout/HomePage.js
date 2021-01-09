import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const HomePage = () => {
  return (
    <section className='HomePage'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>abc Shop</h1>
          <p className='lead'>This is falcon your virtual assistance</p>
          <div className='buttons'>
            <Link to='/signup' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-Light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
