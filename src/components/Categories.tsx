import { useQuery } from 'react-query'
import { getCategories } from '../api/getCategories'
import { useSearchProduct } from '../Store/Product'

const Categories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  const { setQuery } = useSearchProduct((state) => state)
  const handleQuery = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuery(e.currentTarget.innerText)
  }
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex gap-3'>
          <button
            onClick={(e) => handleQuery(e)}
            className=' items-center focus:bg-slate-500 my-1 rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
          >
            Todos
          </button>
          {categories?.map((category) => (
            <div key={category}>
              <button
                onClick={(e) => handleQuery(e)}
                className=' items-center    focus:bg-slate-500 my-1 rounded-md bg-slate-900 px-5 py-2.5 text-center  font-medium text-white hover:bg-gray-700 transition'
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Categories
