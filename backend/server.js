import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import cors from 'cors';

const app = express();
app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000' }));


dotenv.config();

const PORT = process.env.PORT || 3030;

app.use(express.json());

app.use('/products', productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server started at http://localhost:' + PORT);
});
