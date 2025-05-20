import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginData } from '../types';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:3030/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        console.log('Login successful');
        navigate('/closet');
      } else {
        console.log('Login failed', data.error);
        setError('Invalid username or password.');
      }
    } catch (error) {
      setError('Invalid username or password.');
      console.log('Error during login');
    }
  };

  return (
    <div className='Login'>
      <h3>Login</h3>
      <h4>Enter your virtual closet</h4>
      <form className='loginForm' onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          placeholder='Username'
          autoComplete='off'
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div>
          <button>Login</button>
        </div>
      </form>

      {error && <p id='error'>Invalid username or password. Please try again </p>}

      <p>
        <Link to='/signup'>Create an Account</Link>{' '}
      </p>
    </div>
  );
}
