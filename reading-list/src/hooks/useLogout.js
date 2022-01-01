import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { useAuthContext } from "../context/useAuthContext"
export const useLogout = () => {
    const {dispatch}= useAuthContext()
   const logout =()=>{
       signOut(auth).then(()=>{
           console.log('userSigned out')
dispatch({type: 'LOGOUT'})
       }).catch((err)=>{
           console.log(err.message)
       })

   }
   return {logout}
}
