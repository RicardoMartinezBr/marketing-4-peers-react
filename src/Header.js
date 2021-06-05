import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <nav className="Header">
          <Link to="/">
            <img 
                className="Header__logo"
                src="./marketing-4-peers-logo.png" 
                alt=""
                />
            </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Header
