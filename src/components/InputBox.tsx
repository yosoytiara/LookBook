import React, { useState } from 'react';

// import { ClothingItem } from '../types';

// interface State {
//   item: string;
//   category: string;
//   color: string;
// }

export default function InputBox() {
  const [item, setItem] = useState({
    name: '',
    category: '',
    color: '',
    image: '',
  });
  const [submittedItems, setSubmittedItems] = useState<
    { name: string; category: string; color: string; image: string }[]
  >([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(item);
    setSubmittedItems((prevItems) => [
      ...prevItems,
      {
        name: item.name,
        category: item.category,
        color: item.color,
        image: item.image,
      },
    ]);
  };
  return (
    <div>
      <form className='closetform' onSubmit={handleSubmit}>
        <h2> Enter your wardrobe</h2>
        <div>
          <label>
            Item name:
            <input
              name='item'
              placeholder='ex:Zara fur coat'
              value={item.name}
              onChange={(e) => {
                setItem({
                  ...item,
                  name: e.target.value,
                });
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <select
              id='category'
              name='category'
              value={item.category}
              onChange={(e) => {
                setItem({
                  ...item,
                  category: e.target.value,
                });
              }}
            >
              <option value='tops'>Tops</option>
              <option value='bottoms'>Bottoms</option>
              <option value='shoes'>Shoes</option>
              <option value='outerwear'>Outerwear</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Color:
            <input
              name='color'
              type='color'
              id='color'
              value={item.color}
              onChange={(e) => {
                setItem({
                  ...item,
                  color: e.target.value,
                });
              }}
            />
          </label>
          <label>
            Image:
            <input
              name='image'
              placeholder='enter image url'
              id='image'
              value={item.image}
              onChange={(e) => {
                setItem({
                  ...item,
                  image: e.target.value,
                });
              }}
            />
          </label>
        </div>
        <button type='submit'>Add item</button>
      </form>
      <div>
        {submittedItems.map((submittedItem, index) => (
          <p key={index}>
            {submittedItem.name} ({submittedItem.category}){' '}
            <span
              style={{
                backgroundColor: submittedItem.color,
                color: submittedItem.color,
                padding: '0.2em',
              }}
            >
              {submittedItem.color}
              <img
                src={submittedItem.image}
                style={{
                  height: 300,
                }}
              ></img>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

// export default InputBox;
