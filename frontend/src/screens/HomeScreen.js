import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <section className='flex' id='hero-section'>
      <div className='hero-section-container'>
        <div className='hero-left flex'>
          <h1>
            Learn <span>Data Structures</span> & <span>Algorithms</span> with
            ease
          </h1>
          <p>
            Solve coding problems and prepare for technical interviews with{' '}
            <span>CodeGrid</span>. Join now!
          </p>
          <div className='flex'>
            <button className='create-account-button'>Create an account</button>
            <Link to='/login'>
              <button className='login-button'>Log in</button>
            </Link>
          </div>
        </div>

        <div className='hero-right flex'>
          <img src='hero-icon.svg' alt='logo' />
        </div>
      </div>

      <div className='waves'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#273036" fill-opacity="0.3" d="M0,32L80,53.3C160,75,320,117,480,149.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default HomeScreen;
