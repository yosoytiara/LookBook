import React from 'react';
import { Link } from 'react-router-dom';
import { SignupData } from '../types';

export default function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <input name='name' type='name'></input>
        <input name='email' type='email'></input>
        <input name='password' type='password'></input>
      </form>
      <p>
        <Link>Login In</Link>{' '}
      </p>
    </div>
  );
}
