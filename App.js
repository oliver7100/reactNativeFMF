import React from 'react'
import { AuthProvider } from './src/components/auth'
import { HttpProvider } from './src/components/http'
import MainContainer from './src/navigators/MainContainer'

const App = () => {
  return (
    <AuthProvider>
      <HttpProvider>
        <MainContainer />
      </HttpProvider>
    </AuthProvider>
  )
}

export default App
