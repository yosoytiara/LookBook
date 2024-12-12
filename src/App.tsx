import React, { useState } from 'react';
import InputBox from './components/InputBox';
import './App.css';
import Outfits from './components/Outfits';

// const [items] = useState<ClothingItem[]>([]);

const App: React.FC = () => {
  return (
    <div>
      <h1 id='lookbook'>LookBook</h1>
      <InputBox></InputBox>
      <Outfits></Outfits>
    </div>
  );
};

export default App;
