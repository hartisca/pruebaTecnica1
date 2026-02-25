import TodoItem from '../TodoItem/TodoItem'
import type { Todo } from '../../types/todo'

interface TodoListProps {
  todos: Todo[]
}

const data = [
  {id: '1', title: 'Do something', completed: false},
  {id: '2', title: 'Do dishes', completed: false},
  {id: '3', title: 'Kill someone', completed: true},
]

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
     <ul className='border rounded-2xl border-stone-300 min-h-120'>
      {data.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
     </ul>
     
    </>   
  )
}

export default TodoList