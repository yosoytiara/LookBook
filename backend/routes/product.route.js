import express from 'express';

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controller/product.controller.js';

const router = express.Router();

router.get('/', getProducts);

router.put('/:id', updateProduct);

router.post('/', createProduct);

router.delete('/:id', deleteProduct);



export default router;