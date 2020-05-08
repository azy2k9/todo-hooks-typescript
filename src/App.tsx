import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';
import AddTodo from './components/AddTodo';
import Layout from './layout/Layout';
import CentralizedWrapper from './layout/CentralizedWrapper';
import { Grid } from '@material-ui/core';
import SideHeader from './layout/SideHeader';

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, todo: 'Clean the car', completed_status: false },
    { id: 2, todo: 'Buy a pressure washer', completed_status: false },
    { id: 3, todo: 'Learn TypeScript', completed_status: false },
    { id: 4, todo: 'Master React', completed_status: false },
  ]);

  const handleAddTodo = (todo: string) => {
    const newTodo: TodoType = {
      id:
        Math.max.apply(
          null,
          todos.map((todo: TodoType) => todo.id)
        ) + 1,
      completed_status: false,
      todo,
    };
    setTodos((prevTodos: TodoType[]) => [...prevTodos, newTodo]);
  };

  return (
    <Grid container direction="row" style={{ height: '100vh' }}>
      <SideHeader />
      <Layout>
        <CentralizedWrapper>
          <AddTodo handleAddTodo={handleAddTodo} />
        </CentralizedWrapper>
        <CentralizedWrapper>
          <TodoList setTodos={setTodos} todos={todos} />
        </CentralizedWrapper>
      </Layout>
    </Grid>
  );
};

export default App;
