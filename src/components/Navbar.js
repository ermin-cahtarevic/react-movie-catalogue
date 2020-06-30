import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import Search from './Search';
import fetchMovies from '../actions/fetchMovies';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClick = () => {
    fetchMovies()(dispatch);
  };

  return (
    <div className="navbar">
      <Link
        to="/"
        className="logo"
        onClick={() => handleClick()}
      >
        Movie Catalogue
      </Link>
      {
        location.pathname === '/' ? (
          <Search />
        ) : null
      }
    </div>
  );
};

export default Navbar;
