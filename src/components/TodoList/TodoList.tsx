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
            prevTodos.reduce((acc, current) => { 
                if (current.id === todo.id) {
                    current.completed_status = !current.completed_status;
                }
                return acc;
            }, []);
            return prevTodos;
        })
    }

    return (
        <ul>
            {todos.map(todo => <Todo key={todo.id} toggleCompletedStatus={toggleCompletedStatus} todo={todo} />)}
        </ul>
    )
}

export default TodoList
