import axios from 'axios'
import { useAuthProvider } from '../auth'

const HttpContext = React.createContext()

const HttpProvider = ({ children, ctx }) => {
  const {
    state: { token },
  } = useAuthProvider()

  const _client = React.useMemo(() => {
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
  }, [token])

  return (
    <HttpContext.Provider
      value={{
        client: _client,
      }}>
      {children}
    </HttpContext.Provider>
  )
}

const useHttpProvider = () => {
  return React.useContext(HttpContext)
}

export { HttpProvider, useHttpProvider }
