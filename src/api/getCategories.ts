import { Category } from '../types'

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const categories = await res.json()
  return categories
}
