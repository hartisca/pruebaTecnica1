import type { Todo } from '../../types/todo'
import TodoItem from '../TodoItem/TodoItem'

interface TodoListProps {
  todos: Todo[]
  onDelete: (id: number) => void
}

const TodoList = ({ todos, onDelete }: TodoListProps) => {
  return (
    <ul className="border rounded-2xl border-stone-300 min-h-120">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList