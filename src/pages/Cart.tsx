import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartProduct } from '../Store/Product'
import type { CartProduct } from '../types'

const Cart = () => {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useAuth0()
  const { cart } = useCartProduct((state) => state)
  const { removeFromCart } = useCartProduct((state) => state)
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/')
    }
    return
  }, [isAuthenticated, navigate, isLoading])
  console.log(cart);

  const total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)
  return (
    <div className='w-90% m-auto '>
      {cart.map((product: CartProduct) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <img
              className='object-cc object-contain w-60 h-60 '
              src={product.image}
              alt=''
            />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>
              {product.quantity}
            </p>
            <p>
              Total : {product.price * product.quantity}
            </p>
            <button className='btn' onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        )
      })}
      <h1>Total : {total}</h1>
    </div>
  )
}

export default Cart
