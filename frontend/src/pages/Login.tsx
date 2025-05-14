import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginData } from '../types';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3030/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful', data);
        navigate('/');
      } else {
        console.log('Login failed', data.error);
      }
    } catch (error) {
      console.log('Error during login');
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form className='Login' onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
      <p>
        <Link to='/signup'>Create an Account</Link>{' '}
      </p>
    </div>
  );
}
