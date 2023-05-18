import React, { useState } from 'react';
import {
  GoogleLoginButton,
  GithubLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(password, email);
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

        <div className='login-right flex'>
          <Form className='flex'>
            <Form.Group className='mb-3 flex' controlId='email'>
              <Form.Control
                type='email'
                placeholder='Email Address'
                value={email}
                size='lg'
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3 flex' controlId='password'>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                size='lg'
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className='login-div flex'>
              <Button className='mt-2 mb-2' variant='primary' type='submit'>
                Log In
              </Button>{' '}
              <p>Forgot Password</p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
