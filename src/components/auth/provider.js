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
                console.log(email, password)
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