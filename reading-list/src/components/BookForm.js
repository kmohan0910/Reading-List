import { useState } from 'react'
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { useAuthContext } from '../context/useAuthContext'

export default function BookForm() {
  const [newBook, setNewBook] = useState('')
  const { user }= useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref= collection(db,'books')
    await addDoc(ref, {
      title: newBook,
      uid : user.uid
    })
    setNewBook('')
  }

  return (
    <form style={{justifyContent: "center",
      display: 'grid'
  }}onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button style={{ borderRadius: "5px", margin: "0px 22px 0px  22px"}}>Add</button>
    </form>
  )
}
