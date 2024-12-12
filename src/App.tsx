import React, { useState } from 'react';
import InputBox from './components/InputBox';
import Closet from './components/Closet';
import './App.css';
import Outfits from './components/Outfits';
import { ClothingItem } from './types';

// const [items] = useState<ClothingItem[]>([]);

const App: React.FC = () => {
  return (
    <div>
      <h1 id='lookbook'>LookBook</h1>
      <InputBox></InputBox>
      {/* <Closet items={items}></Closet> */}
      <Outfits></Outfits>
    </div>
  );
};

export default App;
