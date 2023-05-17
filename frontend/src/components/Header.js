import React from 'react';

function Header() {
  return (
    <nav className='flex nav-flex'>
      <div className='logo'>
        <img src='logo.svg' alt='logo' />
      </div>

      <ul className='flex nav-list'>
        <li>
          <a href='#'><span>Explore</span></a>
        </li>
        <li>
          <a href='#'><span>Testimonials</span></a>
        </li>
        <li>
          <a href='#'><span>Premium</span></a>
        </li>
        <li>
          <a href='#'><span>Try it</span></a>
        </li>
        <li>
          <a href='#'><span>Log in</span></a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
