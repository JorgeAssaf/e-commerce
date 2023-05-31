import { Routes, Route } from 'react-router-dom'

import { Home, Cart, ProductItem } from './pages'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:id' element={<ProductItem />} />
      </Routes>
    </>
  )
}

export default App
