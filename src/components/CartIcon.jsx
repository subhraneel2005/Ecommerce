import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function CartIcon() {
  return (
    <div className='block cursor-pointer'>
        <div className='w-[20px] h-[20px] rounded-full bg-red-600'></div>
        <FaShoppingCart size={30}/>
    </div>
  )
}

export default CartIcon