import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function CartIcon() {

  const navigate = useNavigate();

  const route = "/cartPage";

  return (
    <div className='block cursor-pointer' onClick={() => navigate(route)}>
        <FaShoppingCart size={30}/>
    </div>
  )
}

export default CartIcon