import React, { useState } from 'react';
import InputBox from './components/InputBox';
import './App.css';
import Outfits from './components/Outfits';

const App: React.FC = () => {
  return (
    <div>
      <h1 id='lookbook'>LookBook</h1>
      <InputBox></InputBox>
      <Outfits />
    </div>
  );
};

export default App;
