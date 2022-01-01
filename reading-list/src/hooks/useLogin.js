import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config"
import { useState } from "react"
import { useAuthContext} from '../context/useAuthContext'


export const useLogin = () => {
   const {dispatch} = useAuthContext()
    const [error , setError] = useState(null)
const login= (email, password) =>{
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
        .then((res)=>{
           dispatch({type : 'LOGIN', payload : res.user})
        })
        .catch((err)=>{
            console.log(err.message)
            setError(err.message)
        })
}

return {error , login}
}
