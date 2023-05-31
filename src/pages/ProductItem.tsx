import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { useCartProduct, useQuatity } from '../Store/Product'
import { getProductById } from '../api/getProductById'

import type { CartProduct, Products } from '../types'

const ProductItem = () => {
  const { id } = useParams()

  const { quantity, setQuantity } = useQuatity((state) => state)
  const { addToCart, cart } = useCartProduct((state) => state)

  const {
    data: product,
    isLoading,
    isFetching,
    error,
  } = useQuery('product', () => getProductById(`${id}`))

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
    <div className='mt-10 w-90% m-auto '>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div >

          <img
            className='object-cc object-contain mx-auto h-md '
            src={product?.image}
            alt={product?.title}
          />

          <div className='max-w-2xl m-auto '>
            <h5 className='text-3xl  text-slate-900'>{product?.title}</h5>
            <div className='mt-2 mb-5 flex items-center justify-between'>

              <p>
                <span className='text-3xl font-bold text-slate-900'>
                  {product?.price?.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </span>
                {/* <span className='text-sm text-slate-900 line-through'>
                      $699
                    </span> */}
              </p>
            </div>
            <p className='my-5'>{product?.description}</p>

            <div className='flex gap-6 items-center'>
              <button
                className='bg-slate-900 py-1 px-3 rounded-lg text-white text-xl'
                onClick={() => setQuantity(quantity - 1)}
              >
                <Minus />
              </button>
              <p>{quantity}</p>
              <button
                className='bg-slate-900 py-1 px-3 rounded-lg text-white text-xl'
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus />
              </button>
            </div>
            <button className='btn mt-5 mb-10 items-center' onClick={() => handleCart(product!)}>
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
