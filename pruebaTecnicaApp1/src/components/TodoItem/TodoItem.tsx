import type { Todo } from '../../types/todo'

interface Props {
  todo: Todo  
}

const TodoItem = ({todo}: Props) => {
  return (
    <li className='w-100 max-w-100 p-3.5 wrap-break-word text-stone-200 border-b border-collapse'>
      <input 
        type='checkbox'
        checked={todo.completed}        
      />
      {todo.title}
    </li>
  )
}

export default TodoItem