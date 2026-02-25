import { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-rows-[auto_1fr] min-h-screen">
        <h1 className='text-stone-200 font-bold p-4 text-center mt-9 underline'>My To Do List</h1>
  
        <div className="flex justify-center items-center gap-8 mb-35">
          <section>
            <h2 className='text-stone-200 mb-5'>Lista de tareas</h2>
            <TodoList />
          </section>
          <section>
            <h2 className='text-stone-200 mb-5'>Añadir nueva tarea</h2>

          </section>
        </div>
      </div> 
    </>
  )
}

export default App
