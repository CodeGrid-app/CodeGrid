import React, { useState } from 'react';
import {
  GoogleLoginButton,
  GithubLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FormCheck } from 'react-bootstrap';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(password, email);
  return (
    <div className='login-screen flex'>
      <div className='login-container flex direction-column'>
        <div className='login-top'>
          <Form>
            <h1>Log in</h1>
            <Form.Group controlId='email'>
              <Form.Control
                type='email'
                placeholder='Email Address'
                value={email}
                size='lg'
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                size='lg'
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className='login-utilities flex'>
              <div className='flex items-center'>
                <input type='checkbox' id='remember me' name='remember me'></input>
                <label for='remember me'>Remember me</label>
              </div>
              <Link>Forgot password?</Link>
            </div>
            <Button variant='primary' type='submit'>
              Log In
            </Button>{' '}
            <p>Don't have an account? <Link>Sign up</Link></p>
          </Form>
        </div>
        <div className='line-break'><span>OR</span></div>
        <div className='login-buttons'>
          <GoogleLoginButton className='social-button'>
            Google
          </GoogleLoginButton>
          <GithubLoginButton className='social-button'>
            GitHub
          </GithubLoginButton>
          <FacebookLoginButton className='social-button'>
            Facebook
          </FacebookLoginButton>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
