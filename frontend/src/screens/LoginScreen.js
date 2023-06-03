import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from '../components/login_buttons/GoogleButton';
import GithubButton from '../components/login_buttons/GithubButton';
import FacebookButton from '../components/login_buttons/FacebookButton';

import { login } from '../actions/userActions';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo, error, loading } = userLogin;

  useEffect(() => {
    // If user is logged in, redirect to /problems
    if (userInfo) {
      navigate('/problemset/all');
    }
  }, [userInfo, navigate]);

  function submitHandler(event) {
    event.preventDefault();

    // Dispatch login action which posts to /api/users/login the email and password
    dispatch(login(email, password));
  }

  return (
    <div className='login-screen flex'>
      <div className='login-container flex direction-column'>
        <div className='login-top'>
          <Form onSubmit={submitHandler}>
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
            <InputGroup>
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
                  <i className='fa-regular fa-eye-slash fa-sm'></i>
                ) : (
                  <i className='fa-regular fa-eye fa-md'></i>
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
                <label>Remember me</label>
              </div>
              <Link>Forgot password?</Link>
            </div>
            <Button variant='primary' type='submit' className='login-button'>
              Log In
            </Button>{' '}
            <p>
              Don't have an account? <Link to='/signup'>Sign up</Link>
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

export default LoginScreen;
