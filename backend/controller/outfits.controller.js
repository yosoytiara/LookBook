import Outfit from '../models/outfits.model';

export const createOutfits = async (req, res) => {
  try {
    const outfit = await Outfit.create({
      user: req.user.id,
      ...req.body,
    });
    res.status(200).json({ success: true, data: outfit });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.json({ success: true, data: outfits });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteOutfit = async (req, res) => {
  await Outfit.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });

  res.json({ success: true });
};

