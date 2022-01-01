
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useAuthContext } from '../context/useAuthContext'
import { useCollection } from '../hooks/useCollection'

export default function Home() {
  const {user } = useAuthContext()
  const {documents: books} = useCollection('books', ['uid', '==', user.uid])
    

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
