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

export interface LoginData{
  email: string;
  password: string;
};

export interface SignupData{
  email: string;
  password: string;
  name: string;
};
