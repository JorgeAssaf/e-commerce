import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useCartProduct } from '../Store/Product'
import { MenuIcon, ShoppingCartIcon, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Ring } from '@uiball/loaders'
const Navbar: React.FC = () => {
  const { loginWithPopup, isLoading, isAuthenticated, logout, user } =
    useAuth0()
  const { cart } = useCartProduct((state) => state)
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : 'auto'
  }, [nav])

  return (
    <div
      className='flex sticky top-0 z-20 bg-white justify-between items-center  text-slate-9
     px-5% mx-auto py-5 px-4 text-white'
    >
      <h1 className=' text-4xl font-bold z-11 text-slate-900'>Shop</h1>
      <div className='flex-row gap-10 items-center hidden md:flex'>
        {isLoading ? (
          <button
            className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
            disabled
          >
            <Ring size={20} lineWeight={5} speed={2} color='white' />
          </button>
        ) : isAuthenticated ? (
          <div className='dropdown'>
            <div
              tabIndex={0}
              className='flex gap-3 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 '
            >
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

      <div className=' flex items-center gap5 md:hidden text-slate-900'>
        {isAuthenticated && (
          <Link
            className='flex items-center justify-center rounded-md bg-slate-900 px-3 py-2 text-center  font-medium text-white hover:bg-gray-700 transition'
            to='/cart'
          >
            {' '}
            <div className='relative'>
              {/* Ícono del carrito */}
              <ShoppingCartIcon className='h-6 w-6' />

              {/* Número de productos en el carrito */}
              <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-1rem w-1rem flex items-center justify-center text-0.75rem'>
                {cart.length > 9 ? '9+' : cart.length}
              </div>
            </div>
          </Link>
        )}
        <span className='z-50 ' onClick={handleNav}>
          {nav ? (
            <X className='text-white' size={30} />
          ) : (
            <MenuIcon size={30} />
          )}
        </span>
      </div>

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-full h-full border-r border-r-gray-900 bg-slate-900 z-11 ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left--100%'
        }
      >
        <li>
          <h1 className='w-full text-3xl font-bold text-white m-4'>Shop</h1>
        </li>
        <li className='p-4 border-b  flex justify-center border-gray-600'>
          {isLoading ? (
            <button
              className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
              disabled
            >
              <div
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          '
              >
                <Ring size={15} lineWeight={5} speed={2} color='white' />
              </div>
            </button>
          ) : isAuthenticated ? (
            <div className='dropdown'>
              <div
                tabIndex={0}
                className='flex gap-2 items-center  rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 '
              >
                <img
                  className='rounded-full w-6 h-6'
                  src={user?.picture}
                  alt={user?.name}
                />

                <div className='text-base'>{user?.name}</div>
              </div>

              <ul
                tabIndex={0}
                className='dropdown-content menu  shadow font-medium  bg-slate-900 text-white 
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
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link
            className='flex items-center justify-center rounded-md  px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
            to='/'
          >
            Home
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link
            className='flex items-center justify-center rounded-md  px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
            to='/products'
          >
            Products
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
