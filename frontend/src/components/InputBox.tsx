import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';

export default function InputBox() {
  const [submittedItems, setSubmittedItems] = useState<
    {
      _id: string;
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

  const [updatedProduct, setUpdatedProduct] = useState({
    _id: '',
    name: '',
    category: '',
    color: '',
    image: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3030/products');
        setSubmittedItems(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

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
      if (Array.isArray(submittedItems)) {
        setSubmittedItems((prevItems) => [...prevItems, data.data]); // Add new item
      } else {
        console.error('submittedItems is not an array!');
      }
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

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3030/products/${id}`);

      setSubmittedItems((prevItems) =>
        prevItems.filter((item) => item._id !== id)
      );
    } catch (error: any) {
      console.error('Error deleting product:', error.message);
    }
  };

  const handleUpdate = async (event: React.FormEvent) => {
    try {
      await axios.put(
        `http://localhost:3030/products/${updatedProduct._id}`,
        updatedProduct
      );
      setSubmittedItems((prevItems) =>
        prevItems.map((item) =>
          item._id === updatedProduct._id
            ? { ...item, ...updatedProduct }
            : item
        )
      );
      setIsEditing(false); // Reset editing mode after successful update
      setUpdatedProduct({
        _id: '',
        name: '',
        category: '',
        color: '',
        image: '',
      });
      console.log('Product updated successfully');

    } catch (error: any) {
      console.error('Error updating product:', error.message);
    }
  };

   const handleEdit = (product: any) => {
     setUpdatedProduct(product);
     setIsEditing(true);
   };

  const filterItemsByCategory = (category: string) => {
     if (!Array.isArray(submittedItems)) {
       console.error('submittedItems is not an array');
       return [];
     }
     return submittedItems.filter(
       (submittedItem) => submittedItem.category === category
     );
  };

 
  return (
    <div className='InputBox'>
      <form
        className='closetform'
        onSubmit={isEditing ? handleUpdate : handleSubmit}
      >
        <h2> Enter your wardrobe</h2>
        <div>
          <label>
            Item name:
            <input
              name='item'
              placeholder='ex:Zara fur coat'
              value={isEditing ? updatedProduct.name : newProduct.name}
              onChange={(e) => {
                isEditing
                  ? setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  : setNewProduct({ ...newProduct, name: e.target.value });
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
              value={isEditing ? updatedProduct.category : newProduct.category}
              onChange={(e) => {
                isEditing
                  ? setUpdatedProduct({
                      ...updatedProduct,
                      category: e.target.value,
                    })
                  : setNewProduct({ ...newProduct, category: e.target.value });
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
              value={isEditing ? updatedProduct.color : newProduct.color}
              onChange={(e) => {
                isEditing
                  ? setUpdatedProduct({
                      ...updatedProduct,
                      color: e.target.value,
                    })
                  : setNewProduct({ ...newProduct, color: e.target.value });
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
                value={isEditing ? updatedProduct.image : newProduct.image}
                onChange={(e) => {
                  isEditing
                    ? setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    : setNewProduct({ ...newProduct, image: e.target.value });
                }}
              />
            </label>
          </div>
        </div>
        <button type='submit'>{isEditing ? 'Update item' : 'Add item'}</button>
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

                    <button onClick={() => handleEdit(submittedItem)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(submittedItem._id)}>
                      Delete
                    </button>
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
