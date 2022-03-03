import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todo/tosos.api';

function TodoInput() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    return (
    <div>
        <input
            value={value}
            onChange = {(e)=>setValue(e.currentTarget.value)}
        /> 
        <button
            onClick={() => {
                dispatch(addTodo(value));
                setValue("");
            }}   
        >
        ADD</button>      
    </div>
  )
}

export default TodoInput