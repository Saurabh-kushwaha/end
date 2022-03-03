import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {LogOut} from '../store/auth/auth.action'


function Navbar() {
  const con = useSelector((state) => state.auth.isUserLogIn);
  const dispatch = useDispatch(); 
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='post'>Post</Link> 
        <Link to='User'>User</Link>
        <Link to='comments'>Comments</Link>  
        {con &&
        (<button onClick={()=>dispatch(LogOut())}>LogOut</button>)
        } 
    </div>
  )
}

export default Navbar;