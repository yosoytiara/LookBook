import React from 'react';
import { Link } from 'react-router-dom';
import { SignupData } from '../types';

export default function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <input name='name' type='name' placeholder='UserName'></input>
        <input name='password' type='password' placeholder='Password'></input>
        <input name='password' type='password' placeholder='Confirm Password'></input>
        <button> Create Account</button>
      </form>
      <p>
        <Link to='/signup'>Login In</Link>{' '}
      </p>
    </div>
  );
}
