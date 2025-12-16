import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem("token")
            if(!token) return setLoading(false);

            const res = await axios.get("/api/v1/user/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(res.data.user ?? res.data)
        } catch {
            localStorage.removeItem("token")
            setUser(null)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchUser();
    },[])

    return (
        <AuthContext.Provider value = {{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
