import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="logo">Movie Catalogue</Link>
  </div>
);

export default Navbar;