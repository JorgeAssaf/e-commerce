import { Products } from '../types'

export const getProductById = async (id: string): Promise<Products> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const product = await response.json()
  return product
}
