import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AccountDropdownMenu from './AccountDropdownMenu';

function LoggedInHeader() {
  return (
    <nav className='flex items-center logged-nav'>
      <Container className='flex justify-center' fluid>
        <Container className='flex items-center' fluid>
          <div className='flex items-center flex-grow'>
            <ul className='logged-nav-list flex items-end'>
              <div className='logo self-center'>
                <Link to='/'>
                  <img src='/logo.svg' alt='logo' style={{ width: '3rem' }} />
                </Link>
              </div>
              <div className='self-center'>
                <Link to='/'>Explore</Link>
              </div>
              <div className='self-center'>
                <Link to='/problemset/all'>Problems</Link>
              </div>
              <div className='self-center'>
                <Link to='/'>Discuss</Link>
              </div>

              <div className='self-center'>
                <Link to='/'>Store</Link>
              </div>
            </ul>
          </div>
          <div className='flex premium items-center '>
            <Link to='/'>Premium</Link>
          </div>

          <div className='flex items-center'>
            <div>
              <Button variant='link'>
                <Link to='/'>
                  <i className='fa-regular fa-bell'></i>
                </Link>
              </Button>
            </div>
            <div className='relative account-icon'>
              <AccountDropdownMenu />
            </div>
          </div>
        </Container>
      </Container>
    </nav>
  );
}

export default LoggedInHeader;
