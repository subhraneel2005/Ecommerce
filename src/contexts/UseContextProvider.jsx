import React, { useState } from 'react'
import UseContext from './UseContext'

const UseContextProvider = ({children}) => {

  const [allData, setAlldata] = useState([]);

  const getData = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setAlldata(json)
            console.log(json);
            });
  }
  return (
    <UseContext.Provider value={{allData, getData,setAlldata}}>
        {children}
    </UseContext.Provider>
  )
}

export default UseContextProvider