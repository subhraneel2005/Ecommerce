import React from 'react'
import UseContextProvider from './contexts/UseContextProvider'
import HomePage from './components/HomePage'

function App() {
  return (
    <UseContextProvider>
      <HomePage/>
    </UseContextProvider>
  )
}

export default App