import { useState } from 'react'
import BookList from './BookList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookList/>
    </>
  )
}

export default App
