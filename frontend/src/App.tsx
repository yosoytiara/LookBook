import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputBox from './components/InputBox';
import Generator from './pages/Generator';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>LookBook</h1>
        <Routes>
          <Route path='/' element={<InputBox />} />
          <Route path='/outfits' element={<Generator />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
