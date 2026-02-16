import React from 'react';
import Outfits from '../components/Outfits';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface ClosetItem {
  id: string;
  name: string;
  image: string;
  category: 'tops' | 'bottoms' | 'shoes' | 'outerwear' | 'accessories';
}

interface Outfit {
  _id?: string;
  top: ClosetItem | null;
  bottom: ClosetItem | null;
  shoes: ClosetItem | null;
  outerwear: ClosetItem | null;
  accessories: ClosetItem | null;
}

export default function Generator() {
  const [selectedItem, setSelectedItem] = useState<Outfit>({
    top: null,
    bottom: null,
    shoes: null,
    outerwear: null,
    accessories: null,
  });

  const [savedOutfits, setSavedOutfits] = useState<Outfit[]>([]);

  const token = localStorage.getItem('token');

  // gets outfits from backends
  const fetchSavedOutfits = async () => {
    if (!token) return;
    try {
      const res = await axios.get('http://localhost:3030/outfits/mine', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) {
        setSavedOutfits(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching saved outfits:', err);
    }
  };

  useEffect(() => {
    fetchSavedOutfits();
  }, []);

  const saveOutfit = async () => {
    if (!token) return;
    try {
      await axios.post('http://localhost:3030/outfits', selectedItem, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Outfit saved successfully');
      fetchSavedOutfits();
    } catch (err) {
      console.error('Error saving outfit', err);
    }
  };

  //delete save outfit
  const unsaveOutfit = async (outfitId: string) => {
    if (!token) return;

    try {
      await axios.delete(`http://localhost:3030/outfits/${outfitId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Outfit deleted successfully');

      setSavedOutfits((prev) =>
        prev.filter((outfit: any) => outfit._id !== outfitId),
      );
    } catch (err) {
      console.error('Error deleting outfit:', err);
    }
  };
  return (
    <div className='Generator'>
      <Outfits selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

      <button onClick={saveOutfit}>Save Outfit</button>

      <h3>Saved Outfits:</h3>
      {savedOutfits.length === 0 && <p>No saved outfits yet.</p>}

      <div className='saved-outfits'>
        {savedOutfits.map((outfit, idx) => (
          <div
            key={idx}
            className='saved-outfit'
            style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
          >
            {Object.values(outfit).map(
              (item: any, i) =>
                item && (
                  <div
                    key={i}
                    className='outfit-item'
                    style={{ textAlign: 'center' }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ height: 120 }}
                    />
                    <p>{item.name}</p>
                  </div>
                ),
            )}
            <button
              onClick={() => unsaveOutfit(outfit._id!)}
              style={{ height: 30, marginLeft: 10 }}
            >
              Unsave
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
