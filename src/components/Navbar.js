import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import Search from './Search';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <Link to="/" className="logo">Movie Catalogue</Link>
      {
        location.pathname === '/' ? (
          <Search />
        ) : null
      }
    </div>
  );
}

export default Navbar;
