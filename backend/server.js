import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.rout.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;


app.use(express.json);

app.use('/products', productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server started at http://localhost:'+ PORT);
});
