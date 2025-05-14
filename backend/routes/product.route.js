import express from 'express';

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getUserProducts,
} from '../controller/product.controller.js';

const router = express.Router();

router.get('/', getProducts);

router.get('/mine', getUserProducts)

router.put('/:id', updateProduct);

router.post('/', createProduct);

router.delete('/:id', deleteProduct);

export default router;
