import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartProduct } from '../Store/Product'
import { Products } from '../types'

const Cart = () => {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useAuth0()
  const { cart } = useCartProduct((state) => state)

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/')
    }
    return
  }, [isAuthenticated, navigate, isLoading])

  return (
    <div>
      {cart.map((product: Products) => {
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
          </div>
        )
      })}
    </div>
  )
}

export default Cart
