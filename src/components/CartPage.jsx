import React, { useContext } from 'react'
import UseContext from '../contexts/UseContext'

function CartPage() {

  const {cart,setCart} = useContext(UseContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price,0);

    const removeItem = (itemId) => {
      const afterRemovingItem = cart.filter(item => item.id !== itemId);
      setCart(afterRemovingItem);
    }

    if(cart.length === 0)
    {
      return (
        <div className='bg-slate-700 h-screen w-full flex justify-center items-center flex-wrap gap-5 p-6'>
          <div className='h-[120px] w-[80%] text-xl text-center px-6 py-4 bg-gray-400 rounded-xl flex justify-center items-center'><h1>Your cart is empty!</h1></div>
        </div>
      )
    }

else{

  return (
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>

    {/* Cart items */}
    <div className="grid grid-cols-1 gap-4">
      {cart.map(item => (
        <div
          key={item.id}
          className="bg-white p-4 shadow rounded-md flex items-center justify-between"
        >
          <div className="flex items-center">
            <img
              src={item.src}
              alt={item.title}
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{`Price:₹${item.price}`}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700">Remove</button>
        </div>
      ))}
    </div>

    {/* Total price */}
    <div className="mt-8">
      <p className="text-xl font-semibold">Total Price: ₹{totalPrice}</p>
    </div>

    {/* Checkout button */}
    <div className="mt-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Checkout
      </button>
    </div>
  </div>
  )}
}

export default CartPage