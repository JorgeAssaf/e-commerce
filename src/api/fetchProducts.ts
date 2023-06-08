import { Products } from '../types'

export const fetchProducts = async (limit = '20'): Promise<Products[]> => {
  const response = await fetch(
    `https://fakestoreapi.com/products?limit=${limit}`,
  )
  const products = await response.json()
  return products
}
