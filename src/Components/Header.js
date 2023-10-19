// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/members">Members</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
