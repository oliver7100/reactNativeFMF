import axios from "axios"
import { createContext, useMemo, useReducer } from "react"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        return {...state, ...action}
    }, {
        token: null
    })

    const actions = useMemo(() => {
        return {
            login: (email, password) => {
                axios.post("http://192.168.1.131:3000/api/auth/login", {email, password})
                .then(({data: {token}}) => {
                    dispatch({token})
                })
                .catch(err => console.log(JSON.stringify(err.response.data)))
            }
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                state,
                actions
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider