import React from 'react'
import { AuthProvider } from './src/components/auth'
import MainContainer from './src/navigators/MainContainer'

const App = () => {
  return (
    <AuthProvider>
      <MainContainer />
    </AuthProvider>
  )
}

export default App
