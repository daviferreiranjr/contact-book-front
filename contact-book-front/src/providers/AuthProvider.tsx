import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/validator";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => Promise<void>
    signUp: (data: RegisterData) => Promise<void>
    loading: boolean
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('your-contack-book:token')

        if(!token){
            setLoading(false)

            return
        }
        
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)

    }, [])

    const signIn = async (data: LoginData) => {

        try {

            const response = await api.post('/login', data)
            const {token} = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem('your-contack-book:token', token)
            setLoading(false)

            navigate('/dashboard')
        } 
        
        catch (error) {
            console.log(error)
        }
    }

    const signUp = async (data: RegisterData) => {
        try {
          const response = await api.post('/users', data);
          const { token } = response.data
    
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          localStorage.setItem('your-contact-book:token', token);
          setLoading(false);
    
          navigate('/')
        } catch (error) {
          console.log(error);
        }
    }

    return(
        <AuthContext.Provider value={{ signIn, signUp, loading}}>
            {children}
        </AuthContext.Provider>
    )

    
}