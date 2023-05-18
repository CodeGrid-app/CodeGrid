import React from 'react';
import {
  GoogleLoginButton,
  GithubLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons';
import Form from 'react-bootstrap/Form';

function LoginScreen() {
  return (
    <div className='login-screen flex'>
      <div className='login-container flex'>
        <div className='login-left flex'>
          <div className='logo'>
            <img src='/logo.svg' alt='logo' />
          </div>

          <div className='login-buttons flex'>
            <GoogleLoginButton
              className='social-button'
              size='40px'
            ></GoogleLoginButton>
            <GithubLoginButton
              className='social-button'
              size='40px'
            ></GithubLoginButton>
            <FacebookLoginButton
              className='social-button'
              size='40px'
            ></FacebookLoginButton>
          </div>

          <p>
            Do not have an account? <span>Sign Up Now</span>
          </p>
        </div>

        <div className='login-right flex'></div>
      </div>
    </div>
  );
}

export default LoginScreen;
