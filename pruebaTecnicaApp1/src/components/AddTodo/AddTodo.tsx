

const AddTodo = () => {
  return (
    <form action="" className="flex gap-1.5">
      <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-200 leading-tight focus:outline-none focus:shadow-outline placeholder-stone-300" name="addTodo" placeholder="Escribe la tarea"/>
      <button>Añadir</button>
    </form>
  )
}

export default AddTodo