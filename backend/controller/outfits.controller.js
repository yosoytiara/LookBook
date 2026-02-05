import Outfit from '../models/outfits.model';

export const getProducts = async (req, res) => {
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
