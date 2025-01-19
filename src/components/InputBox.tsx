import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function InputBox() {
  const [submittedItems, setSubmittedItems] = useState<
    {
      name: string;
      category: string;
      color: string;
      image: string;
    }[]
  >([]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    color: '',
    image: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3030/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      setSubmittedItems((prevItems) => [...prevItems, data.data]);
      setNewProduct({
        name: '',
        category: '',
        color: '',
        image: '',
      });

      console.log('Form data submitted:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id:string) => {
    try{
      const response = await fetch(`http://localhost:3030/products/{$id}`),{
         method: 'DELETE',
    });

    if(!response.ok){
      throw new Error('Failed to delete item');
    }

  }
    }catch(error){

    }
  };

  const filterItemsByCategory = (category: string) => {
    return submittedItems.filter(
      (submittedItem) => submittedItem.category === category
    );
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
              value={newProduct.name}
              onChange={(e) => {
                setNewProduct({
                  ...newProduct,
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
              value={newProduct.category}
              onChange={(e) => {
                setNewProduct({
                  ...newProduct,
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
              value={newProduct.color}
              onChange={(e) => {
                setNewProduct({
                  ...newProduct,
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
                value={newProduct.image}
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
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
        {['tops', 'bottoms', 'shoes', 'outerwear'].map((category) => (
          <div key={category}>
            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <div className='closet'>
              {filterItemsByCategory(category).map((submittedItem, index) => (
                <ul key={index}>
                  <li>
                    <img
                      src={submittedItem.image}
                      alt={submittedItem.name}
                      style={{
                        height: 250,
                      }}
                    />
                    <p>{submittedItem.name}</p>

                    <button>Update</button>
                    <button>Delete</button>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
