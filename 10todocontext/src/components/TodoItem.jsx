/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useTodoContext } from '../contexts';

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.todo}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      {/* Add more controls as needed */}
    </div>
  );
};

export default TodoItem;
