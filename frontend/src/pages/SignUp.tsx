import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignupData } from '../types';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3030/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        console.log('Signup successful');
        navigate('/');
      } else {
        console.log('Signup failed', data.error);
      }
    } catch (error) {
      console.log('Error during login');
    }
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          placeholder='UserName'
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
        <input
          name='password'
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <button> Create Account</button>
      </form>
      <p>
        <Link to='/login'>Login In</Link>{' '}
      </p>
    </div>
  );
}
