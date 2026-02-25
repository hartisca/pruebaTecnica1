import type { Todo } from '../../types/todo'

interface Props {
  todo: Todo
  onDelete: (id: number) => void
}

const TodoItem = ({ todo, onDelete }: Props) => {
  return (
    <li className="w-100 max-w-100 p-3.5 wrap-break-words text-stone-200 border-b flex items-center gap-3">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
      />

      <span className="flex-1">{todo.title}</span>

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