import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartProduct } from '../Store/Product'

import { toast } from 'react-toastify'
import Price from '../components/Price'

import type { CartProduct } from '../types'

const Cart = () => {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useAuth0()
  const { cart } = useCartProduct((state) => state)
  const { removeFromCart } = useCartProduct((state) => state)
  const { reset } = useCartProduct((state) => state)

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/')
    }
  }, [isAuthenticated, isLoading, navigate])



  const total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)
  const handleCheckout = () => {
    //refresh the page
    reset()
    navigate('/')

    toast.success('Checkout successfull', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  return (
    <div>
      <h3 className='text-3xl font-bold'>Cart</h3>

      <section className='grid gap-5 '>
        <div className='flex'>
          {/* Columna de tarjetas de productos en el carrito */}
          <div className='w-3/4 md:block hidden '>
            {cart.map((product: CartProduct) => {
              return (
                <div className='p-4 mb-4' key={product.id}>
                  <h5 className='text-xl  text-slate-900'>{product?.title}</h5>

                  <img
                    className='object-cc object-contain w-60 h-60 my-5'
                    loading='lazy'
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

            <h3 className='text-xl font-medium my-5'>Resumen :</h3>
            {cart.length > 0 ? (
              <div className='flex flex-col gap-2'>
                {cart.map((product: CartProduct) => {
                  return (
                    <div
                      className='flex justify-between flex-col  gap-1'
                      key={product.id}
                    >
                      <p className='text-lg font-medium'>{product.title}</p>
                      <span className='font-bold'>
                        {product.quantity} x {product.price}
                      </span>
                      <span>
                        Subtotal:{' '}
                        <Price className='font-medium'>
                          {product.price * product.quantity}
                        </Price>
                      </span>
                    </div>
                  )
                })}
                <span className='text-2xl my-3 font-medium'>
                  Total: <Price>{total}</Price>{' '}
                </span>
                <button onClick={handleCheckout} className='btn'>
                  Checkout
                </button>
              </div>
            ) : (
              <p className='text-2xl font-medium'>Your cart is empty</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
