import React from 'react';
import Outfits from '../components/Outfits';

const saveOutfit = async () => {
  const token = localStorage.getItem('token');

  try {
    await axios.post('http://localhost:3030/outfits', selectedItem, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.error('Error saving outfit', err);
  }
};

export default function Generator() {
  return (
    <div className='Generator'>
      <Outfits />
      <button onClick={saveOutfit}>Save Outfit</button>;
    </div>
  );
}
