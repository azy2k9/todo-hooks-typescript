import React, { useState } from 'react'
import TodoList from './components/TodoList/TodoList';
import './App.css';

export interface TodoType {
  id: number
  todo: string
  completed_status: boolean
}

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, todo: 'Clean the car', completed_status: false },
    { id: 2, todo: 'Buy a pressure washer', completed_status: false },
    { id: 3, todo: 'Learn TypeScript', completed_status: false },
    { id: 4, todo: 'Master React', completed_status: false },
  ]);

  return (
    <TodoList setTodos={setTodos} todos={todos} />
  )
}


export default App;
