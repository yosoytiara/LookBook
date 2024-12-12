import React, { useState } from 'react';
import axios from 'axios';

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

  const filterItemsByCategory = (category: string) => {
    return submittedItems.filter(
      (submittedItem) => submittedItem.category === category
    );
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted');
    try {
      // const response = await axios.post('http://localhost:5000/api/form', item);
      // console.log('Data saved:', response.data);
      console.log(item);
      setSubmittedItems((prevItems) => [
        ...prevItems,
        {
          name: item.name,
          category: item.category,
          color: item.color,
          image: item.image,
        },
        // response.data,
      ]);
      console.log(submittedItems);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className='InputBox'>
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
          <div>
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
        </div>
        <button type='submit'>Add item</button>
      </form>
      <div>
        <h2> Closet:</h2>
        {/* //Display items below */}
        <h4>Tops</h4>
        <div className='closet'>
          {filterItemsByCategory('tops').map((submittedItem, index) => (
            <ul key={index}>
              <li>
                {' '}
                <img
                  src={submittedItem.image}
                  style={{
                    height: 250,
                  }}
                ></img>
              </li>
            </ul>
          ))}
        </div>
        <h4>Bottoms</h4>
        <div className='closet'>
          {filterItemsByCategory('bottoms').map((submittedItem, index) => (
            <ul key={index}>
              <li>
                {' '}
                <img
                  src={submittedItem.image}
                  alt={submittedItem.name}
                  style={{
                    height: 250,
                  }}
                ></img>
              </li>
            </ul>
          ))}
        </div>
        <h4>Shoes</h4>
        <div className='closet'>
          {filterItemsByCategory('shoes').map((submittedItem, index) => (
            <ul key={index}>
              <li>
                {' '}
                <img
                  src={submittedItem.image}
                  alt={submittedItem.name}
                  style={{
                    height: 250,
                  }}
                ></img>
              </li>
            </ul>
          ))}
        </div>
        <h4>Outerwear</h4>
        <div className='closet'>
          {filterItemsByCategory('outerwear').map((submittedItem, index) => (
            <ul key={index}>
              <li>
                {' '}
                <img
                  src={submittedItem.image}
                  alt={submittedItem.name}
                  style={{
                    height: 250,
                  }}
                ></img>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default InputBox;
