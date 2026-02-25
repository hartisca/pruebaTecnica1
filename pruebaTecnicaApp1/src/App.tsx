import { useState } from "react"
import type { Todo } from "./types/todo"
import TodoList from "./components/TodoList/TodoList"
import AddTodo from "./components/AddTodo/AddTodo"

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [nextId, setNextId] = useState(1)

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: nextId,
      title,
      completed: false,
    }

    setTodos(prev => [...prev, newTodo])
    setNextId(prev => prev + 1)
  }
  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const onComplete = (id: number) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
}

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen min-w-screen">
      <h1 className="text-stone-200 font-bold p-4 text-center mt-9 underline">
        My To Do List
      </h1>

      <div className="flex justify-center items-center gap-8 mb-35">
        <section>
          <h2 className="text-stone-200 mb-5">Lista de tareas</h2>
          <TodoList todos={todos} onDelete={deleteTodo} onComplete={onComplete} />
        </section>

        <section className="maw-w-md">
          <h2 className="text-stone-200 mb-5">Añadir nueva tarea</h2>
          <AddTodo onAdd={addTodo} />
        </section>
      </div>
    </div>
  )
}

export default App
