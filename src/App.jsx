import { useState } from 'react'
import Todos from './compnents/Todos'
import './App.css'
import AddTodo from './compnents/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>REDUX TODO</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
