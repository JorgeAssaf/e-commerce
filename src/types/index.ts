export interface Products {
  category: Category
  description: string
  id: number
  image: string
  price: number
  rating: Rating
  title: string
}

export interface CartProduct extends Products {
  quantity: number
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  count: number
  rate: number
}
