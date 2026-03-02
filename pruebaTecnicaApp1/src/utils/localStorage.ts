import type { Todo } from "../types/todo";

interface TodoStorageProps {
  todos: Todo[];
}

export function setItemStorage({ todos }: TodoStorageProps) {
  try {
    // convertimos el objeto a string
    const serializedTodos = JSON.stringify(todos);

    // guardamos en localStorage con una key
    window.localStorage.setItem("todos", serializedTodos);
  } catch (error) {
    console.error("Error guardando en localStorage:", error);
  }
}

export function getItemStorage(): Todo[] {
  try {
    const serializedTodos = window.localStorage.getItem("todos");
    return serializedTodos ? JSON.parse(serializedTodos) : [];
  } catch (error) {
    console.error("Error leyendo localStorage:", error);
    return [];
  }
}