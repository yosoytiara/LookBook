import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface ClosetItem {
  id: string;
  name: string;
  image: string;
  category: 'tops' | 'bottoms' | 'shoes' | 'outerwear' | 'accessories';
}

interface Outfit {
  top: ClosetItem | null;
  bottom: ClosetItem | null;
  shoes: ClosetItem | null;
  outerwear: ClosetItem | null;
  accessories: ClosetItem | null;
}

type OutfitKey = keyof Outfit;

const Outfits: React.FC = () => {
  const [closet, setCloset] = useState<ClosetItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<Outfit>({
    top: null,
    bottom: null,
    shoes: null,
    outerwear: null,
    accessories: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get<{ success: boolean; data: ClosetItem[] }>(
        'http://localhost:3030/products/mine',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        console.log('API response:', response.data);
        setCloset(response.data.data);
      })
      .catch((error) => console.error('Error fetching closet:', error));
  }, []);

  const generateOutfit = () => {
    const categories: { [key in OutfitKey]: ClosetItem[] } = {
      top: [],
      bottom: [],
      shoes: [],
      outerwear: [],
      accessories: []
    };

    closet.forEach((item) => {
      if (item.category === 'tops') {
        categories.top.push(item);
      } else if (item.category === 'bottoms') {
        categories.bottom.push(item);
      } else if (item.category === 'shoes') {
        categories.shoes.push(item);
      } else if (item.category === 'outerwear') {
        categories.outerwear.push(item);
      } else if (item.category === 'accessories') {
        categories.accessories.push(item);
      }
    });

    const getRandomItem = (items: ClosetItem[]): ClosetItem | null => {
      return items.length > 0
        ? items[Math.floor(Math.random() * items.length)]
        : null;
    };

    setSelectedItem({
      top: getRandomItem(categories.top),
      bottom: getRandomItem(categories.bottom),
      shoes: getRandomItem(categories.shoes),
      outerwear: getRandomItem(categories.outerwear),
      accessories: getRandomItem(categories.accessories),
    });
  };
  return (
    <div className='Outfits'>
      <h4>Outfit Recommendation based on your closet:</h4>
      <button>
        <Link to='/closet'> Back to Home</Link>
      </button>
      <button type='submit' id='outfitSubmit' onClick={generateOutfit}>
        Generate a Outfit
      </button>
      <div className='closet'>
        {Object.values(selectedItem).map((item, index) =>
          item ? (
            <ul key={index}>
              <li>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    height: 250,
                  }}
                />
              </li>
              <li>{item.name}</li>
            </ul>
          ) : null,
        )}
      </div>
      <button>Save Outfit</button>
    </div>
  );
};

export default Outfits;
