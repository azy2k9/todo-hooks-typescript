import React, { useState } from 'react'

interface IProps {
    handleAddTodo: (todo: string) => void
}

const AddTodo: React.FC<IProps> = ({ handleAddTodo }) => {
    const [inputVal, setInputVal] = useState<string>('hell');
    const handleAdd = () => {
        handleAddTodo(inputVal); 
        setInputVal('');
    }
    return (
        <div>
            <input 
                value={inputVal}
                onChange={event => setInputVal(event.target.value)}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        handleAdd();
                    }
                }}
                placeholder="Enter a todo"
            />
            <button onClick={handleAdd}>Add a todo</button>
        </div>
    )
}

export default AddTodo;