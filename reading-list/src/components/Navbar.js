import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../context/useAuthContext'
export default function Navbar() {
  const { user } = useAuthContext()
  const {logout } = useLogout()
  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!user &&(  <li><Link to="/login">Login</Link></li>)}
       {!user &&( <li><Link to="/signup">Signup</Link></li>)}
       {user &&( <li onClick={logout}>Logout</li>)}
      </ul>
    </nav>
  )
}
