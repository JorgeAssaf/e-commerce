import { create } from 'zustand'
import { Products } from '../types'

interface ProductState {
  cart: Products[]
  addToCart: (product: Products) => void
  removeFromCart: (product: Products) => void
}

interface SearchState {
  query: string
  setQuery: (query: string) => void
}

export const useCartProduct = create<ProductState>((set, get) => ({
  cart: [],
  addToCart: (product) => {
    if (get().cart.find((item) => item.id === product.id)) return

    set((state) => ({
      cart: [...state.cart, product],
    }))
  },
  removeFromCart: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    })),
}))

export const useSearchProduct = create<SearchState>((set) => ({
  query: '',
  setQuery: (query) => set({ query }),
}))
