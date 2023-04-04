import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : null
        const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null

        setUser(user)
        setToken(token)
    }, [])

    const handleRegister = async (e, userData) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('https://ecommerce-next-js-xz5u.vercel.app//api/auth/register', userData)
            setUser(data.others)
            setToken(data.token)
            localStorage.setItem("user", JSON.stringify(data.others))
            localStorage.setItem("token", JSON.stringify(data.token))
            router.push('/')

        } catch (error) {
            console.error(error)
        }
    }

    const handleLogin = async (e, userData) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('https://ecommerce-next-js-xz5u.vercel.app/api/auth/login', userData)
            console.log(data, 'LOGIN')
            setUser(data.others)
            setToken(data.token)
            localStorage.setItem("user", JSON.stringify(data.others))
            localStorage.setItem("token", JSON.stringify(data.token))
            router.push('/')

        } catch (error) {
            console.error(error)
        }
    }

    return <authContext.Provider value={{
        user,
        token,
        handleRegister,
        handleLogin
    }}>
        {children}
    </authContext.Provider>
}

export function useAuthContext() {
    return useContext(authContext)
}