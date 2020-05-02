import React, { useState } from 'react';

interface IProps {
  handleAddTodo: (todo: string) => void;
}

const AddTodo: React.FC<IProps> = ({ handleAddTodo }: IProps) => {
  const [inputVal, setInputVal] = useState<string>('');
  const handleAdd = () => {
    handleAddTodo(inputVal);
    setInputVal('');
  };
  return (
    <div>
      <input
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter' && inputVal.length > 0) {
            handleAdd();
          }
        }}
        placeholder="Enter a todo"
      />
      <button onClick={handleAdd} disabled={inputVal.length === 0}>
        Add a todo
      </button>
    </div>
  );
};

export default AddTodo;
