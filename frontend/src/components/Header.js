import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoggedInHeader from './LoggedInHeader';

function Header() {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  return userInfo !== null ? (
    <LoggedInHeader />
  ) : (
    <nav className='flex nav-flex'>
      <div className='logo'>
        <Link to='/'>
          <img src='/logo.svg' alt='logo' />
        </Link>
      </div>
      <ul className='flex nav-list'>
        <li>
          <a href='#'>
            <span>Explore</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span>Testimonials</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span>Premium</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span>Try it</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span>Log in</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
