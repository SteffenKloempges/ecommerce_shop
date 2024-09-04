import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProductsFetch, CategoriesFetch } from './context/Context'
import LoadingScreen from './pages/LoadingScreen'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Products from './data/Products'
import Categories from './data/Categories'
import ProductDetail from './components/ProductDetail'
import './App.scss'
import ProductByCategory from './pages/ProductByCategory'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  // console.log(products)
  // console.log(categories)

  return (
    <>
      <ProductsFetch.Provider value={{ products, setProducts }}>
        <CategoriesFetch.Provider value={{ categories, setCategories }}>
          <Products />
          <Categories />
          <Routes>
            <Route path="/" element={<LoadingScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="/category/:categoryName" element={<ProductByCategory />} />
          </Routes>
        </CategoriesFetch.Provider>
      </ProductsFetch.Provider>
    </>
  )
}

export default App
