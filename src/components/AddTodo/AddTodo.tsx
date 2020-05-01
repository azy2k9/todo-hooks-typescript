import React, { useState } from 'react'

interface IProps {
    handleAddTodo: (todo: string) => void
}

const AddTodo = ({ handleAddTodo }: IProps) => {
    const [inputVal, setInputVal] = useState<string>('hell');
    
    return (
        <div>
            <input value={inputVal} onChange={event => setInputVal(event.target.value)} placeholder="Enter a todo" />
            <button onClick={e => handleAddTodo(inputVal)}>Add a todo</button>
        </div>
    )
}

export default AddTodo;