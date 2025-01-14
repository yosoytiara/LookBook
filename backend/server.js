import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


import productRoutes from "./routes/product.rout.js"
dotenv.config();

const app = express();

app.use("/products", productRoutes);


app.listen(3030, () => {
  connectDB();
  console.log('Server started at http://localhost:3030/');
});
