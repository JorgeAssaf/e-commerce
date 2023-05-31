import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useCartProduct, useSearchProduct } from '../Store/Product'
import { ShoppingCartIcon } from 'lucide-react'
const Navbar = () => {
  const { loginWithPopup, isLoading, isAuthenticated, logout, user } =
    useAuth0()
  const { cart } = useCartProduct((state) => state)
  const { setQuery } = useSearchProduct((state) => state)
  return (
    <header className='px-5% py-5  position-sticky top-0 z-10 bg-white'>
      <nav className=' justify-between items-center flex'>
        <h2 className='text-2xl'>Open-Commerce</h2>
        <div className=' flex-row gap-10 items-center hidden md:flex'>
          <form className='flex items-center gap-3 '>
            <input
              className='border border-gray-300 rounded-md p-2'
              type='text'
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search...'
              name='search'
              id='search '
            />
          </form>
          {isLoading ? (
            <button
              className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
              disabled
            >
              Loading...
            </button>
          ) : isAuthenticated ? (
            <div className='dropdown'>



              <div tabIndex={0} className='flex gap-3 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 '>
                <img
                  className='rounded-full w-6 h-6'
                  src={user?.picture}
                  alt={user?.name}
                />

                <div className='text-base'>{user?.name}</div>
              </div>


              <ul
                tabIndex={0}
                className='dropdown-content menu  shadow font-medium bg-slate-900 text-white 
                 w-40 mt-2 rounded-md  absolute top-10 right-0 z-10'
              >

                <li>
                  <button
                    className=' bg-transparent text-white  hover:bg-gray-200 hover:text-gray-700 transition  '
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 '
              onClick={() => loginWithPopup()}
            >
              Login
            </button>
          )}
          <Link
            className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
            to='/'
          >
            Home
          </Link>
          <Link
            className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
            to='/products'
          >
            Products
          </Link>
          {isAuthenticated && (
            <Link
              className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
              to='/cart'
            >
              {' '}
              <div className='relative'>
                {/* Ícono del carrito */}
                <ShoppingCartIcon className='h-6 w-6' />

                {/* Número de productos en el carrito */}
                <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-1.29rem w-1.29rem flex items-center justify-center text-0.75rem'>
                  {cart.length > 9 ? '9+' : cart.length}
                </div>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </header >
  )
}

export default Navbar
