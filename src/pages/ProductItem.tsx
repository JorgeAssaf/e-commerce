import { useParams } from 'react-router-dom'
import { Products } from '../types'
import { useEffect, useState } from 'react'

const ProductItem = () => {
  const params = useParams()
  const [product, setProduct] = useState({} as Products)

  useEffect(() => {
    const fetchProducts = async (): Promise<Products> => {
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()

      const product = products.find(
        (product: Products) => product.title == params.title,
      )

      console.log(product)
      setProduct(product)
      return products
    }
    fetchProducts()
  }, [params.title])

  return (
    <div>
      <div className='mt-4 px-5 pb-5'>

        <h5 className='text-xl tracking-tight text-slate-900'>
          {product?.title}
        </h5>
        <img src={product.image} alt="" />

        <div className='mt-2 mb-5 flex items-center justify-between'>
          <p>
            <span className='text-3xl font-bold text-slate-900'>
              ${product?.price}
            </span>
            {/* <span className='text-sm text-slate-900 line-through'>
                      $699
                    </span> */}
          </p>

        </div>
      </div>
    </div>
  )
}

export default ProductItem
