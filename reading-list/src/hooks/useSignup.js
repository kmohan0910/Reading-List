import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config"
import { useAuthContext } from "../context/useAuthContext"
export const useSignup = () => {
   const {dispatch}= useAuthContext()
    const [error , setError] = useState(null)
const signup= (email, password) =>{
    setError(null)
    createUserWithEmailAndPassword(auth, email, password)
        .then((res)=>{
            dispatch({ type: 'LOGIN', payload : res.user})
            console.log('user signed up' , res.user)
        })
        .catch((err)=>{
            console.log(err.message)
            setError(err.message)
        })
}

return {error , signup}
}
