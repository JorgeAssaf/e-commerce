import { Routes, Route } from 'react-router-dom'
import { Home, Cart, ProductItem } from './pages'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/:title' element={<ProductItem />} />
    </Routes>
  )
}

export default App
