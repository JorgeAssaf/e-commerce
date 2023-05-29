import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useCartProduct, useSearchProduct } from '../Store/Product'
import Navbar from '../components/Navbar'
import { fetchProducts } from '../api/fetchProducts'

import type { Products } from '../types'

const Home: React.FC = (): JSX.Element => {
  const [quantity, setQuantity] = useState('')

  const { addToCart } = useCartProduct((state) => state)
  const { query } = useSearchProduct((state) => state)

  const { data: products, isLoading } = useQuery(
    'product',
    () => fetchProducts(''),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  )
  // const slugify = (str: string) =>
  //   str
  //     .toLowerCase()
  //     .trim()
  //     .replace(/[^\w\s-]/g, '')
  //     .replace(/[\s_-]+/g, '-')
  //     .replace(/^-+|-+$/g, '')

  console.log(products)

  return (
    <div className='antialiased font-sans'>
      <Navbar />
      <main className='w-90% m-auto'>
        <h1 className='text-4xl'>Welcome to Open-Commerce</h1>

        <section className='grid justify-items-center place-content-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            products?.map((product) => (
              <div
                key={product.id}
                className='relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'
              >
                <Link
                  className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
                  to={`/${product.title}`}
                >
                  <img
                    className='object-cc object-contain mx-auto'
                    src={product.image}
                    alt={product.title}
                  />
                  {/* <span className='absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'>
                  39% OFF
                </span> */}
                </Link>
                <div className='mt-4 px-5 pb-5'>
                  <Link to={`/${product.title.replace(/%/g, '-')}`}>
                    <h5 className='text-xl tracking-tight line-clamp-2 text-slate-900'>
                      {product.title}
                    </h5>
                  </Link>
                  <div className='mt-2 mb-5 flex items-center justify-between'>
                    <p>
                      <span className='text-3xl font-bold text-slate-900'>
                        {product.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </span>
                      {/* <span className='text-sm text-slate-900 line-through'>
                      $699
                    </span> */}
                    </p>
                    <div className='flex items-center'>
                      <svg
                        aria-hidden='true'
                        className='h-5 w-5 text-yellow-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        className='h-5 w-5 text-yellow-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        className='h-5 w-5 text-yellow-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        className='h-5 w-5 text-yellow-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        className='h-5 w-5 text-yellow-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <span className='mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold'>
                        {product.rating.rate}
                      </span>
                    </div>
                  </div>

                  <button className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:(outline-none ring-4 ring-blue-300)'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='mr-2 h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  )
}

export default Home
