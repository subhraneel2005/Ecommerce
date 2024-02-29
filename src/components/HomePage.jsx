import React, { useContext, useState } from 'react'
import ProductData from '../data/ProductData';
import UseContext from '../contexts/UseContext';
import CartIcon from './CartIcon';
import Navabara from './Navabara';


function HomePage() {

  const{handleClick, cart} = useContext(UseContext);

  return (
    <div className="container mx-auto py-8">
    <div className='flex justify-between px-3'>
      <h1 className="text-3xl font-semibold mb-4">All Products</h1>
      <div className='flex gap-4'>
        <Navabara/>
        <div className='flex gap-1'>
          <CartIcon/><p className='text-xl font-bold'>{cart.length}</p>
        </div>
      </div>
    </div>
    {/* Product cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ProductData.map(product => (
        <div
          key={product.id}
          className="bg-white p-4 shadow rounded-md"
        >
          <img
            src={product.src}
            alt={product.title}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-bold">{`₹${product.price}`}</p>
          <button className='px-4 py-2 bg-neutral-800 text-neutral-400 cursor-pointer'
          onClick={() => handleClick(product)}
          >Add to cart</button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default HomePage