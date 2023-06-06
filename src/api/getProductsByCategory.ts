import { Products } from '../types'

export const getProductByCategory = async (category: string): Promise<Products[]> => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const product = await response.json()
  return product
}
