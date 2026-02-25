import { useState } from "react"

interface AddTodoProps {
  onAdd: (title: string) => void
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) return

    onAdd(title)
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-1.5">
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-200 leading-tight focus:outline-none focus:shadow-outline placeholder-stone-300"
        placeholder="Escribe la tarea"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Añadir</button>
    </form>
  )
}

export default AddTodo