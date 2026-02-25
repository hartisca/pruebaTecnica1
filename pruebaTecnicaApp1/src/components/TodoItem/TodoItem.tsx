import type { Todo } from '../../types/todo'

interface Props {
  todo: Todo
  index: number
  onDelete: (id: number) => void
  onComplete: (id: number) => void
}

const TodoItem = ({ todo, index, onDelete, onComplete }: Props) => {
  return (
    <li className="w-100 max-w-100 p-3.5 wrap-break-words text-stone-200 border-b flex items-center gap-3">
      <span>{index}</span>
      <span className={todo.completed?"flex-1 line-through text-red-500" : "flex-1"}>{todo.title}</span>
      <button
        className="no-global hover:cursor-pointer"
        onClick={() => onComplete(todo.id)}
      >
        {todo.completed? "⬅️": "✅"}
      </button>
      <button
        className="no-global hover:cursor-pointer"
        onClick={() => onDelete(todo.id)}
      >
        ❌
      </button>
    </li>
  )
}

export default TodoItem