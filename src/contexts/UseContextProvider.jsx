import React, { useState } from 'react'
import UseContext from './UseContext'

const UseContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);
 

  const handleClick = (newItem) => {
    setCart( prev => {
      const updatedCart = [...prev,newItem];
      console.log("Cart:",updatedCart);
      return updatedCart;
    })
  };

  return (
    <UseContext.Provider value={{cart,handleClick,setCart}}>
        {children}
    </UseContext.Provider>
  )
}

export default UseContextProvider