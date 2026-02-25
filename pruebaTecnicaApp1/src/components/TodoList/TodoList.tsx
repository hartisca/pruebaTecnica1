import type { Todo } from '../../types/todo'
import TodoItem from '../TodoItem/TodoItem'

interface TodoListProps {
  todos: Todo[]
  onDelete: (id: number) => void
  onComplete: (id:number) => void
}

const TodoList = ({ todos, onDelete, onComplete }: TodoListProps) => {
  return (
    <ul className="border rounded-2xl border-stone-300 min-h-120">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index + 1}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </ul>
  )
}

export default TodoList