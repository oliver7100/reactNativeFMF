import axios from 'axios'
import React from 'react'
import { useAuthProvider } from '../auth'

const HttpContext = React.createContext()

const HttpProvider = ({ children, ctx }) => {
  const {
    state: { token },
  } = useAuthProvider()

  const client = React.useMemo(() => {
    const _axios = axios.create({
      baseURL: 'https://fmfrest-production.up.railway.app/api',
    })

    _axios.interceptors.response.use(
      (response) => response,
      (error) => {
        Promise.reject(error)
      }
    )

    _axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = 'Bearer ' + (token || null)
        return config
      },
      (error) => Promise.reject(error)
    )

    return _axios;
  }, [token])

  return (
    <HttpContext.Provider
      value={{
        client
      }}>
      {children}
    </HttpContext.Provider>
  )
}

const useHttpProvider = () => {
  return React.useContext(HttpContext)
}

export { HttpProvider, useHttpProvider }
