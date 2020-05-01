import React from 'react'
import Todo from '../Todo/Todo'
import { TodoType } from '../../App';

export interface Props {
    todos: TodoType[]
    setTodos: Function
}

const TodoList = ({ todos, setTodos }: Props) => {
    const toggleCompletedStatus = (todo: TodoType) => {
        setTodos((prevTodos: TodoType[]) => {
            return prevTodos.reduce((acc: TodoType[], current: TodoType) => { 
                if (current.id === todo.id) {
                    const newTodo: TodoType = {
                        id: current.id,
                        todo: current.todo,
                        completed_status: !current.completed_status
                    }
                    acc = [...acc, newTodo];
                }
                else {
                    acc.push(current);
                }
                return acc;
            }, []);
        })
    }

    return (
        <ul>
            {todos.map(todo => <Todo key={todo.id} toggleCompletedStatus={toggleCompletedStatus} todo={todo} />)}
        </ul>
    )
}

export default TodoList
