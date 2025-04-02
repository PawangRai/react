import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
} // This is the initial State

export const todoSlice = createSlice({ // In order to create a slice, we have to give a name, it's initial state and the reducers, reducers are just functionality, but we have to define those functionalities here.
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {// We have access to two things, state and action. state gives access to the current initial state.
            const todo = {
                id: nanoid(),
                text: action.payload // action has the property payload which will have the text
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )},

        updateTodo: (state, action) => {
          const todo = state.todos.find((todo) => todo.id === action.payload.id)
          if (todo) {
            todo.text = action.payload.text
          }
        }

    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions // Syntax, we need to export individual functionality from the slice.

// We also have to export all the reducers because we can only make changes to the store with the help of reducers so we have to register those reducers in the store.
export default todoSlice.reducer