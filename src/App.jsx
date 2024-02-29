import React from 'react'
import UseContextProvider from './contexts/UseContextProvider'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <UseContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          {/* <Route path='/product/:id' element={<ProductPage/>}></Route> */}
          <Route path='/cartPage' element={<CartPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </UseContextProvider>
  )
}

export default App