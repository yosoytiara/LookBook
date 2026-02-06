import express from 'express';
import {
  createOutfits,
  getOutfits,
  deleteOutfit,
} from '../controller/outfits.controller';

const router = express.Router();

router.post('/', createOutfits);
router.get('mine/', getOutfits);
router.delete('/:id', deleteOutfit);

export default router;
