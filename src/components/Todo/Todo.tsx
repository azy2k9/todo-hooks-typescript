import React from 'react'
import { TodoType } from '../../App'

export interface Props {
    todo: TodoType
    toggleCompletedStatus: Function
}

const Todo = ({ todo, toggleCompletedStatus }: Props) => {
    return (
        <li>
            {`${todo.todo} - ${todo.completed_status ? 'Completed' : 'Incomplete'}`}
            <button onClick={() => toggleCompletedStatus(todo)}>Mark as {`${todo.completed_status ? 'incomplete' : 'complete'}`}</button>
        </li>
    )
}

export default Todo
