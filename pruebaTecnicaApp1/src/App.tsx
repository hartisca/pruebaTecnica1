import { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="">
          {/* <img src={} className="logo" alt="Vite logo" /> */}
        </a>
      </div>
      <h1 className='text-red-500 font-bold p-4'>Probando cositas de nuevo</h1>
      <div className="card">
        <TodoList />
      </div>
    </>
  )
}

export default App
