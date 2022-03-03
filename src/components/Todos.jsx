import React from 'react'
import { useSelector } from 'react-redux';
import Todo from './Todo';
import TodoInput from './TodoInput';

function Todos() {
  const todos = useSelector(state => state.todos.data);
  console.log(todos);
  return (
    <div>
      <TodoInput />
      {
        todos.map((todo)=>(
        <div key={todo.id}>
          <Todo todo={todo}/>
        </div> 
        ))
      }
    </div>
  )
}
export default Todos;