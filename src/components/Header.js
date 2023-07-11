import React from 'react';

const Header = () => (
  <header>
    <a href="/">
      <h1 id="header__logo">
        <b>Math</b>
        <span> Magicians</span>
      </h1>
    </a>
    <nav>
      <ul id="header__nav">
        <li className="header__nav-item">
          <a href="/">Home</a>
        </li>
        <li className="header__nav-item">
          <a href="/calculator">Calculator</a>
        </li>
        <li className="header__nav-item">
          <a href="/quotes">Quote</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
