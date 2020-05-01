import React, { useEffect } from 'react'
import { TodoType } from '../../App'

export interface Props {
    todo: TodoType
    toggleCompletedStatus: Function
}

const Todo = ({ todo, toggleCompletedStatus }: Props) => {
    useEffect(() => {
        console.log(todo);
    }, [todo]);
    
    return (
        <li>
            {`${todo.todo} - ${todo.completed_status}`}
            <button onClick={() => toggleCompletedStatus(todo)}>Mark as {`${todo.completed_status ? 'incomplete' : 'complete'}`}</button>
        </li>
    )
}

export default Todo
