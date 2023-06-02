import { create } from 'zustand'
import { CartProduct } from '../types'
import { persist } from 'zustand/middleware'

interface ProductState {
  cart: CartProduct[]
  addToCart: (product: CartProduct) => void
  removeFromCart: (id: number) => void

  reset: () => void
}

interface SearchState {
  query: string
  setQuery: (query: string) => void
}

interface QuantityState {
  quantity: number
  setQuantity: (quantity: number) => void
}

export const useCartProduct = create(
  persist<ProductState>(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        if (get().cart.find((item) => item.id === product.id)) {
          return alert('Product already in cart')
        }

        set((state) => ({
          cart: [product, ...state.cart],
        }))
      },
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),


      reset: () => {
        set(() => ({
          cart: [],
        }))
      }



    }),
    {
      name: 'cart-storage', // unique name
      // (optional) by default, 'localStorage' is used
    },
  ),
)

export const useSearchProduct = create<SearchState>((set) => ({
  query: 'Todos',
  setQuery: (query) => set({ query }),
}))
export const useQuatity = create<QuantityState>((set) => ({
  quantity: 1,
  setQuantity: (quantity) => set({ quantity }),
}))
