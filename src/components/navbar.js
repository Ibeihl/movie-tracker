import React, { Component } from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav>
        <ul className="header-list">
          <div>
            <li>Fun Movie App</li>
          </div>
          <div>
            <li><Link to="/search">Search Movies</Link></li>
            <li><Link to="/saved">Saved Movies</Link></li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;