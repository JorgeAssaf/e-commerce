import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { getProductByCategory } from '../api/getProductsByCategory'
import Price from '../components/Price'
import { Ring } from '@uiball/loaders'

const CategoriesPage = () => {
  const { category } = useParams()

  const { data: products, isLoading } = useQuery({
    queryKey: ['category', category],
    queryFn: () => getProductByCategory(`${category}`),
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  return (
    <>
      <h2 className='text-3xl font-medium capitalize'>{category}</h2>
      <section className='grid m-auto justify-items-center place-content-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
        {isLoading ? (
          <div
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          '
          >
            <Ring size={80} lineWeight={5} speed={2} color='black' />
          </div>
        ) : (
          products?.map((product) => (
            <div
              key={product.id}
              className='relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'
            >
              <Link
                className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
                to={`/${product.id}`}
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
              <div className='mt-4 px-5 mb-5'>
                <Link to={`/${product.id}`}>
                  <h5 className='text-xl tracking-tight line-clamp-2 text-slate-900'>
                    {product.title}
                  </h5>
                </Link>
                <div className='flex items-center my-2'>
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
                <div className='mt-2 mb-5 flex gap-1 items-center justify-between'>
                  <p className='text-2xl font-bold text-slate-900'>
                    <Price className=' font-bold text-slate-900'>
                      {product.price}
                    </Price>

                    {/* <span className='text-sm text-slate-900 line-through'>
                      $699
                    </span> */}
                  </p>
                </div>

                <Link
                  to={`/${product.id}`}
                  className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 '
                >
                  Ver producto
                </Link>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  )
}

export default CategoriesPage
