import axios from "axios"
import { createContext, useMemo, useReducer } from "react"
import { useHttpProvider } from "../http"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const { client } = useHttpProvider()
    const [state, dispatch] = useReducer((state, action) => {
        return {...state, ...action}
    }, {
        token: null
    })

    const actions = useMemo(() => {
        return {
            login: (email, password) => {
                client.post("/auth/login", {email, password})
                .then(({data: {token}}) => {
                    dispatch({token})
                })
                .catch(err => console.log(JSON.stringify(err.response.data)))
            },
            register: (email, password, name) => {
                client.post("/auth/register", {email, password, name})
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
                actions,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider