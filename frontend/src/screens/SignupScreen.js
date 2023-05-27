import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FormCheck, InputGroup } from 'react-bootstrap';
import GoogleButton from '../components/GoogleButton';
import GithubButton from '../components/GithubButton';
import FacebookButton from '../components/FacebookButton';

function SignupScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='login-screen flex'>
      <div className='login-container flex direction-column'>
        <div className='login-top'>
          <Form>
            <h1>Sign up</h1>
            <Form.Group controlId='username'>
                <Form.Control
                    type='text'
                    placeholder='Username'
                    value={username}
                    size='lg'
                    onChange={e => setUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Control
                type='email'
                placeholder='Email Address'
                value={email}
                size='lg'
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <InputGroup controlId='password'>
              <Form.Control
                type={showPassword === true ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                size='lg'
                onChange={e => setPassword(e.target.value)}
                className='password-input'
              />

              <Button
                className='password-button'
                variant='secondary'
                onClick={() =>
                  setShowPassword(showPassword === true ? false : true)
                }
              >
                {showPassword === true ? (
                  <i class='fa-regular fa-eye-slash fa-sm'></i>
                ) : (
                  <i class='fa-regular fa-eye fa-md'></i>
                )}
              </Button>
            </InputGroup>
            <div className='login-utilities flex'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='remember me'
                  name='remember me'
                ></input>
                <label for='remember me'>Remember me</label>
              </div>
            </div>
            <Button variant='primary' type='submit' className='login-button'>
              Log In
            </Button>{' '}
            <p>
              Already have an account? <Link to='/login'>Log in</Link>
            </p>
          </Form>
        </div>
        <div className='line-break'>
          <span>Or continue with</span>
        </div>
        <div className='login-buttons'>
          <GoogleButton></GoogleButton>
          <GithubButton></GithubButton>
          <FacebookButton></FacebookButton>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;