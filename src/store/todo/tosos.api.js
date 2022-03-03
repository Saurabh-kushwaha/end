import axios from 'axios'; 

import { todoError, todoRequest, todoSuccess } from './todo.action';

export const addTodo = (value) => dispatch =>{  
    dispatch(todoRequest());
    axios
        .post("http://localhost:3000/todo",
            {
                value: value,
            }
        )
        .then((r) => {
            dispatch(todoSuccess(r.data))
        })
        .catch((error) => {
            dispatch(todoError(error));
        })
};

