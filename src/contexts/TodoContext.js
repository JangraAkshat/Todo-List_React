import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})
// A context in React provides a way to share values like state between components without having to explicitly pass the data through each component manually. 

export const useTodo = ()=> {
    return useContext(TodoContext)
}
// This code defines a custom hook called useTodo. Custom hooks are functions that let you use React features without having to write a class. In this case, useTodo uses the useContext hook to access the current value of the TodoContext. It returns whatever value is stored in the TodoContext.

export const TodoProvider = TodoContext.Provider
// In React, the Provider component is used to provide the context value to all descendant components. This allows components to access the context value using the useContext hook.