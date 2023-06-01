import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import { Minus, Plus, ShoppingCart } from 'lucide-react'

import { useCartProduct, useQuatity } from '../Store/Product'
import { getProductById } from '../api/getProductById'

import type { CartProduct, Products } from '../types'
import Price from '../components/Price'

const ProductItem = () => {
  const { id } = useParams()
  const queryClient = useQueryClient()
  const { quantity, setQuantity } = useQuatity((state) => state)
  const { addToCart, cart } = useCartProduct((state) => state)

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(`${id}`),
    refetchInterval: false,
    refetchOnWindowFocus: false,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product', id] })

    },

    onError(err) {
      console.log(err)
    },
  })

  const handleCart = (product: Products) => {
    const cartProduct: CartProduct = {
      ...product,
      quantity: quantity,
    }
    addToCart(cartProduct)

  }
  if (error) {
    return <div>Something went wrong...</div>
  }

  return (
    <div className='mt-10 w-90% m-auto  '>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img
            className='object-cc object-contain mx-auto h-md '
            src={product?.image}
            alt={product?.title}
          />

          <div className='max-w-2xl m-auto '>
            <h5 className='text-3xl  text-slate-900'>{product?.title}</h5>
            <div className='mt-2 mb-5 flex items-center justify-between'>
              <Price className='text-3xl font-bold text-slate-900'>
                {product?.price}
              </Price>
              {/* <span className='text-sm text-slate-900 line-through'>
                      $699
                    </span> */}
            </div>
            <span className='badge'>{product?.category}</span>
            <p className='my-5'>{product?.description}</p>

            <div className='flex gap-6 items-center text-lg'>
              <button
                className='bg-slate-900 py-2 px-3 rounded-lg text-white '
                onClick={() => setQuantity(quantity - 1)}
              >
                <Minus />
              </button>
              <p>{quantity}</p>
              <button
                className='bg-slate-900 py-2 px-3 rounded-lg text-white '
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus />
              </button>
            </div>
            <button
              className='btn mt-5 mb-10 items-center'
              onClick={() => handleCart(product as Products)}
            >
              <ShoppingCart
                size={20}
                className='inline-block  mr-2'
                strokeWidth={2}
              />
              {cart.find(
                (cartProduct: CartProduct) => cartProduct.id == product?.id,
              )
                ? 'Added to Cart'
                : 'Add to Cart'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductItem
