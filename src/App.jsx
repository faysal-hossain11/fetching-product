
// import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductsView from './feathers/Products/ProductsView'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Services from './components/Services/Services'
// import Products from './components/Products/Products'

function App() {

  return (
    <>
      <ProductsView />
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
      </Routes> */}
    </>
  )
}

export default App
