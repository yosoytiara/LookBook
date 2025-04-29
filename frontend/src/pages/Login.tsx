import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginData } from '../types';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form className='Login'>
        <input name='name' type='name' placeholder='Username'></input>
        <input name='password' type='password' placeholder='Password'></input>
        <button>Login</button>
      </form>
      <p>
        <Link to='/login'>Create an Account</Link>{' '}
      </p>
    </div>
  );
}
