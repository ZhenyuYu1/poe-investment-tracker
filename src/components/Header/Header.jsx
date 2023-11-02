import React from 'react';
import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Your Logo</h1>
        <h1>App Name</h1>
        <nav>
          <ul className="nav-eles">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}