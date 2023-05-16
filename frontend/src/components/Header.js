import React from 'react';

function Header() {
  return (
    <nav className='flex nav-flex'>
      <div className='logo'>
        <img src='logo.svg' alt='logo' />
      </div>

      <ul className='flex nav-list'>
        <li>
          <a href='#'>Explore</a>
        </li>
        <li>
          <a href='#'>Testimonials</a>
        </li>
        <li>
          <a href='#'>Premium</a>
        </li>
        <li>
          <a href='#'>Try It</a>
        </li>
        <li>
          <a href='#'>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
