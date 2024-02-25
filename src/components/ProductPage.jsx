import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import UseContext from '../contexts/UseContext';
import CartIcon from './CartIcon';


function ProductPage({}) {
    const { id } = useParams();
    const { allData } = useContext(UseContext);
    

    const product = allData.find(product => product.id === parseInt(id));
    if (!product) {
        return <div>Product not found</div>;
      }
  return (
    <div className="bg-gray-100 select-none w-full">
        <div className="container mx-auto px-4 py-8 flex">
        <div className="w-[300px] md:w-[500px] md:h-[600px] h-[550px] mx-auto bg-white rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-72 object-center" />
            <div className="p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4 text-lg">Price:${product.price}</p>
            <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded">
                Add to Cart
            </button>
            </div>
        </div>
        <CartIcon/>
        </div>
  </div>

    
    
  )
}

export default ProductPage