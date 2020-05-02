import React from 'react';

export interface IProps {
  todo: TodoType;
  toggleCompletedStatus: Function;
}

const Todo: React.FC<IProps> = ({ todo, toggleCompletedStatus }: IProps) => {
  return (
    <li>
      {`${todo.todo} - ${todo.completed_status ? 'Completed' : 'Incomplete'}`}
      <button onClick={() => toggleCompletedStatus(todo)}>
        Mark as {`${todo.completed_status ? 'incomplete' : 'complete'}`}
      </button>
    </li>
  );
};

export default Todo;
