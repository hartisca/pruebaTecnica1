import type { Todo } from '../../types/todo'

interface Props {
  todo: Todo  
}

const TodoItem = ({todo}: Props) => {
  return (
    <li className='w-100 max-w-100 p-3.5 break-words text-stone-200 border-b-1 border-collapse'>
      <input 
        type='checkbox'
        checked={todo.completed}        
      />
      {todo.title}
    </li>
  )
}

export default TodoItem