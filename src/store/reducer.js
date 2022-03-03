import { combineReducers } from "redux";
import { Authreducer } from "./auth/auth.reducer";
import { Todoreducer } from "./todo/todo.reducer";

export  const reducer =  combineReducers({
    todos: Todoreducer,
    auth: Authreducer
})