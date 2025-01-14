import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.post('/products', async (req, res) => {
  const product = req.body;
  if (!product.name || !product.category || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all fields' });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
  console.log("Error in creating product:", error.message);
res.status(500).json({success: false, message:"Server Error"}) ;
}
});

app.listen(3030, () => {
  connectDB();
  console.log('Server started at http://localhost:3030/');
});
