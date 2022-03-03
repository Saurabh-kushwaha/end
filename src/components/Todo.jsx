import React from 'react'
import { useDispatch } from 'react-redux';
import { deletetodoSuccess } from '../store/todo/todo.action';

function Todo({ todo }) {
  console.log(todo);
  const dispatch = useDispatch();
  return (
    <div>
        <h3>{todo.value}</h3>
        <button onClick={() => dispatch(deletetodoSuccess(todo.id))}>Delete</button>  
    </div>
  )
}
export default Todo