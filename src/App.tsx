import React, { useState } from 'react'
import TodoList from './components/TodoList/TodoList';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, todo: 'Clean the car', completed_status: false },
    { id: 2, todo: 'Buy a pressure washer', completed_status: false },
    { id: 3, todo: 'Learn TypeScript', completed_status: false },
    { id: 4, todo: 'Master React', completed_status: false },
  ]);

  const handleAddTodo = (todo: string) => {
    const newTodo: TodoType = {
      id: Math.max.apply(null, todos.map(todo => todo.id)) + 1,
      completed_status: false,
      todo
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  )
}

export default App;
