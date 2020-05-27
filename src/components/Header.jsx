import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="Header">
    <div className="container Header__container">
      <h1 className="Header__title">
        <Link className="Header__title-link" to="/">
          Blog
        </Link>
      </h1>

      <nav>
        <ul className="Header__nav">
          <li className="Header__navItem">
            <Link to="/" className="Header__navA">
              HTML
            </Link>
          </li>
          <li className="Header__navItem">
            <Link to="/" className="Header__navA">
              CSS
            </Link>
          </li>
          <li className="Header__navItem">
            <Link to="/" className="Header__navA">
              JavaScript
            </Link>
          </li>
          <li className="Header__navItem">
            <Link to="/" className="Header__navA">
              Otros
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
