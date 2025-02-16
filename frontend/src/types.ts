export interface ClothingItem {
  name: string;
  category: 'top' | 'bottom' | 'shoes' | 'outerwear';

  image: '';
}

export interface SubmittedItem {
  _id: string;
  name: string;
  category: string;
  image: string;
}
