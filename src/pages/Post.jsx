import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Post() {
  const [data, setData] = useState([]);
  useEffect(() => {
  fetch("http://localhost:3000/post", {
  method: "GET",
  headers: { "Content-type": "application/json;charset=UTF-8" },
  })
  .then((response) => response.json())
  .then((res) => setData(res))
  }, []);
  
  return (
    <div>
         {/* {
        data.map((todo)=>(
        <div key={todo.id}>
            <h1>{ todo.name}</h1>    
        </div> 
        ))
      } */}
      Post
    </div>
  )
}

export default Post