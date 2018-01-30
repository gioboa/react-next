import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">React</div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <input type="checkbox" id="nav-check" />
        <div className="nav-links">
          <Link href="/" replace>
            <a>Home</a>
          </Link>
          <Link href="/about" replace>
            <a>About</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
