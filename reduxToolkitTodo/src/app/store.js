// How to make a store
// 1. get configure store
// 2. make your reducers

import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer
})