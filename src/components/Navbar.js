import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <nav>
    <div className="nav-content">
      <h1>BookStore CMS</h1>
      <div className="links">
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </div>
    <FaUserAlt className="icon" />
  </nav>
);

export default Navbar;
