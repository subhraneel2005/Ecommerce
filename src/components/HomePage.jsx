import React, { useContext, useEffect, useState } from 'react';
import UseContext from '../contexts/UseContext';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
const HomePage = ({products}) => {

    const {allData} = useContext(UseContext);
    const {getData} = useContext(UseContext);
    const[link,setLink] = useState(``);

    

    useEffect(() => {
        getData();
    },[])

  return (
    <div className="bg-gray-100 h-screen w-full select-none">
      <div className="container mx-auto px-4 py-8">
        <div className='flex flex-wrap justify-between'>
            <div className='block'>
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to My E-Shop</h1>
                <p className="text-lg text-gray-600 mb-12">Your one-stop shop for all your needs.</p>
            </div>
            <CartIcon/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Cards */}
          {allData.map((item) =>(

             <Link to={link} key={item.id}>
             <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
             onClick={() =>setLink(`/product/${item.id}`)}
             >
             <img src={item.image} alt="Product" className="w-full h-48 object-cover object-center" />
             <div className="p-4">
               <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
               <p className="text-gray-600">{`$${item.price}`}</p>
               <div className='flex justify-between px-3'>
                 <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                     Add to Cart
                 </button>
                 <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                     Buy Now
                 </button>
               </div>
             </div>
           </div>
           </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;
