import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProductsFetch, CategoriesFetch } from './context/Context'
import LoadingScreen from './pages/LoadingScreen'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Products from './data/Products'
import Categories from './data/Categories'
import ProductDetail from './components/ProductDetail'
import ProductByCategory from './pages/ProductByCategory'
import './App.scss'
import FilteredProducts from './components/FilteredProducts'
import FilterSite from './components/FilterSite'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [showFilter, setShowFilter] = useState(false)

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
            <Route path="/allProducts/filter/active" element={<FilteredProducts />} />
            <Route path="/filter" element={<FilterSite />} />
          </Routes>
        </CategoriesFetch.Provider>
      </ProductsFetch.Provider >
    </>
  )
}

export default App
