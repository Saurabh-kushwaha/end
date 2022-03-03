import {ADD_TODOS_ERROR, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, DELETE_TODOS_ERROR, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS } from "./todo.actionType";

export const todoRequest = () => ({
    type: ADD_TODOS_REQUEST,
   
})

export const todoSuccess = (payload) => ({
    type: ADD_TODOS_SUCCESS,
    payload
})

export const todoError = () => ({
    type: ADD_TODOS_ERROR
})


export const deletetodoRequest = () => ({
    type: DELETE_TODOS_REQUEST,
})
export const deletetodoSuccess = (payload) => ({
    type: DELETE_TODOS_SUCCESS,
    payload
})
export const deletetodoError = () => ({
    type: DELETE_TODOS_ERROR,
})















// import { ADD_TODOS, ADD_TODOS_ERROR, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, DELETE_TODOS, DELETE_TODOS_ERROR, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS } from "./todo.actionType";
// import { v4 } from 'uuid';

// export const addTodo = (value) => ({
//     type: ADD_TODOS,
//     payload: {
//         id: v4(),
//         value
//     }
// });

// export const todoRequest = (payload) => ({
//     type: ADD_TODOS_REQUEST,
//     payload,
// })
// export const todoSuccess = () => ({
//     type: ADD_TODOS_SUCCESS,
// })
// export const todoError = () => ({
//     type: ADD_TODOS_ERROR
// })

// export const deletetodoRequest = () => ({
//     type: DELETE_TODOS_REQUEST,
// })
// export const deletetodoSuccess = () => ({
//     type: DELETE_TODOS_SUCCESS,
// })
// export const deletetodoError = () => ({
//     type: DELETE_TODOS_ERROR,
// })




// export const deleteTodo = (todoId) => ({
//     type: DELETE_TODOS,
//     payload: todoId
// })
