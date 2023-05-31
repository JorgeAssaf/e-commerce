import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartProduct } from '../Store/Product'
import type { CartProduct } from '../types'
import Price from '../components/Price'

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
  console.log(cart)

  const total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)
  return (
    <div className='w-90% m-auto'>
      <div>
        <h1 className='text-3xl font-bold'>Cart</h1>

        <section className='grid gap-5 mt-5'>
          <div className='flex'>
            {/* Columna de tarjetas de productos en el carrito */}
            <div className='w-3/4'>
              {cart.map((product: CartProduct) => {
                return (
                  <div className='  p-4 mb-4' key={product.id}>
                    <h5 className='text-xl  text-slate-900'>{product?.title}</h5>

                    <img
                      className='object-cc object-contain w-60 h-60 my-5'
                      src={product?.image}
                      alt={product?.title}
                    />

                    <Price className='text-xl font-bold text-slate-900'>
                      {product?.price}
                    </Price>
                    <p>Cantidad : {product.quantity}</p>
                    <span className='flex gap-1'>
                      SubTotal :<Price>{product.price * product.quantity}</Price>

                    </span>
                    <button
                      className='btn'
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Columna del total de la compra */}
            <div className='w-full sticky top-20 h-lg scroll-smooth'>

              <h2 className='text-3xl font-medium mb-5'>Total :</h2>
              <h3 className='text-xl font-medium mb-3'>
                Resumen :
              </h3>
              {cart.length > 0 ? (
                <div className='flex flex-col gap-2'>
                  {cart.map((product: CartProduct) => {
                    return (
                      <div className='flex justify-between' key={product.id}>
                        <Price>{product.title}</Price>
                        <Price>{product.price * product.quantity}</Price>
                      </div>
                    )
                  })}
                  <Price className='text-2xl my-3 font-medium'>{total}</Price>
                  <button className='btn'>Checkout</button>
                </div>
              ) : (
                <p className='text-2xl font-medium'>Your cart is empty</p>
              )}
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Cart
