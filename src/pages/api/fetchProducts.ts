import { Products } from "../../types"


export const fetchProducts = async (query: string): Promise<Products[]> => {
  const response = await fetch(`https://fakestoreapi.com/products${query}`)
  const products = await response.json()
  return products
}