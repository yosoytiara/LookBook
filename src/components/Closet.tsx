import React from 'react';

import { ClothingItem } from '../types';

interface ClosetProps {
  items: ClothingItem[];
}
const Closet: React.FC<ClosetProps> = ({ items }) => {
  return (
    <div>
      <h1>Closet</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Color:</strong>{' '}
              <span
                style={{
                  backgroundColor: item.color,
                }}
              >
                {item.color}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Closet;
