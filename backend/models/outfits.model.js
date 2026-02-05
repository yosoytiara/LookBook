import { truncate } from "fs";
import { ConnectionCheckOutFailedEvent } from "mongodb";
import mongoose from "mongoose";

const outfitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  top: {
    type: Object,
    require: true,
  },
  bottom: {
    type: Object,
    require: true,
  },
  shoes: {
    type: Object,
    require: true,
  },
  outerwear: {
    type: Object,
    require: false,
  },
  accessories: {
    type: Object,
    require: false,
  },
});

const Outfit = mongoose.model('Outfit', outfitSchema);

export default Outfit;