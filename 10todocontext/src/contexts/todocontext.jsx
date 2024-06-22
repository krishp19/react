/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = ({ children, value }) => {
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}
