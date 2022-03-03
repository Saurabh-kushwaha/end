import {ADD_TODOS_ERROR, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, DELETE_TODOS_ERROR, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS,} from "./todo.actionType";
import { initialState } from "./todo.constants";

export const Todoreducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODOS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: false,
            }
        }
        case ADD_TODOS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error:false,
                data: [...state.data, payload]
            }
        }  
        case ADD_TODOS_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        }    
        case DELETE_TODOS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: false,
            }
        }
        case DELETE_TODOS_ERROR: {
            return {
               ...state,
                isLoading: false,
                error: true,
            }
        }
        case DELETE_TODOS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error:false,
                data: state.data.filter((todo)=>todo.id!==payload)
            }
        }
        default: {
            return  state ;
        }    
    }
};