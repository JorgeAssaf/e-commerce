import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import { Home, Cart, ProductItem, Products, CategoriesPage } from './pages'
import Navbar from './components/Navbar'
import { ArrowLeft } from 'lucide-react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <>
      <Navbar />

      <div className='w-90% mx-auto mt-5 '>
        <span
          className={`${pathname === '/' ? 'hidden' : 'flex'
            } mb-5 cursor-pointer `}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size='35' />
        </span>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/categories/:category' element={<CategoriesPage />} />
          <Route path='/:id' element={<ProductItem />} />
        </Routes>
      </div>
    </>
  )
}

export default App
