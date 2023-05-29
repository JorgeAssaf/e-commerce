import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useCartProduct, useSearchProduct } from '../Store/Product'

const Navbar = () => {
  const { loginWithPopup, isLoading, isAuthenticated, logout } = useAuth0()
  const { cart } = useCartProduct((state) => state)
  const { setQuery } = useSearchProduct((state) => state)
  return (
    <header className='px-5% py-5  position-sticky top-0 z10 bg-white'>
      <nav className=' justify-between items-center flex'>
        <h2 className='text-2xl'>Open-Commerce</h2>
        <div className=' flex-row gap-10 hidden md:flex'>
          <form className='flex items-center gap-3 '>
            <input
              className='border border-gray-300 rounded-md p-2'
              type='text'
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search...'
              name='search'
              id='search '
            />
            <button className='bg-transparent'>
              <svg
                width='36px'
                height='36px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    d='M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z'
                    stroke='#000000'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>{' '}
                </g>
              </svg>
            </button>
          </form>
          {isLoading ? (
            <button
              className='py-2 px-4 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 hover:text-gray-700 transition'
              disabled
            >
              Loading...
            </button>
          ) : isAuthenticated ? (
            <button
              className='py-2 px-4 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 hover:text-gray-700 transition'
              onClick={() => logout()}
            >
              Logout
            </button>
          ) : (
            <button
              className='py-2 px-4 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 hover:text-gray-700 transition'
              onClick={() => loginWithPopup()}
            >
              Login
            </button>
          )}
          <Link
            className='py-2 px-4 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 hover:text-gray-700 transition'
            to='/'
          >
            Home
          </Link>
          <Link
            className='py-2 px-4 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 hover:text-gray-700 transition'
            to='/products'
          >
            Products
          </Link>
          {isAuthenticated && (
            <Link
              className='py-2 px-4 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 hover:text-gray-700 transition'
              to='/cart'
            >
              {' '}
              <div className='relative'>
                {/* Ícono del carrito */}
                <svg
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <path
                      d='M4.46785 10.2658C4.47574 10.3372 4.48376 10.4094 4.49187 10.4823L4.61751 11.6131C4.7057 12.4072 4.78218 13.0959 4.91562 13.6455C5.05917 14.2367 5.29582 14.7937 5.78931 15.2354C6.28281 15.6771 6.86251 15.8508 7.46598 15.9281C8.02694 16.0001 8.71985 16 9.51887 16H14.8723C15.4201 16 15.9036 16 16.3073 15.959C16.7448 15.9146 17.1698 15.8162 17.5785 15.5701C17.9872 15.324 18.2731 14.9944 18.5171 14.6286C18.7422 14.291 18.9684 13.8637 19.2246 13.3797L21.7141 8.67734C22.5974 7.00887 21.3879 4.99998 19.5 4.99998L9.39884 4.99998C8.41604 4.99993 7.57525 4.99988 6.90973 5.09287C6.5729 5.13994 6.24284 5.21529 5.93326 5.34375L5.78941 4.04912C5.65979 2.88255 4.67375 2 3.5 2H3C2.44772 2 2 2.44771 2 3C2 3.55228 2.44772 4 3 4H3.5C3.65465 4 3.78456 4.11628 3.80164 4.26998L4.46785 10.2658Z'
                      fill='#323232'
                    ></path>{' '}
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M14 19.5C14 18.1193 15.1193 17 16.5 17C17.8807 17 19 18.1193 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5Z'
                      fill='#323232'
                    ></path>{' '}
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M5 19.5C5 18.1193 6.11929 17 7.5 17C8.88071 17 10 18.1193 10 19.5C10 20.8807 8.88071 22 7.5 22C6.11929 22 5 20.8807 5 19.5Z'
                      fill='#323232'
                    ></path>{' '}
                  </g>
                </svg>

                {/* Número de productos en el carrito */}
                <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-1.29rem w-1.29rem flex items-center justify-center text-0.75rem'>
                  {cart.length > 9 ? '9+' : cart.length}
                </div>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
