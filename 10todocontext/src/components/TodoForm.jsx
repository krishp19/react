/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTodoContext } from '../contexts';

const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo({ todo, completed: false });
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
