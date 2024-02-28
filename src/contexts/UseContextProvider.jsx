import React, { useState } from 'react'
import UseContext from './UseContext'

const UseContextProvider = ({children}) => {

  return (
    <UseContext.Provider>
        {children}
    </UseContext.Provider>
  )
}

export default UseContextProvider