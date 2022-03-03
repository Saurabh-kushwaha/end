import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import  Login  from './pages/Login';
import Comments from './pages/Comments';
import Post from './pages/Post'; 
import User from './pages/User'

function App() {
  const con = useSelector((state) => state.auth.isUserLogIn);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  useEffect(() => {

    if (con) {
      if (pathname === '/login') {
        navigate("/");
      } else {
        navigate(pathname);
      }
    } else {
      navigate("/login")
    }
    
  }, [navigate, con, pathname]);
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='comments' element = {<Comments/>} />
        <Route path='post' element={<Post/>} />
        <Route path='login' element={<Login />} />
        <Route path='user' element={<User/>}/>
      </Routes>
    </div>
  );
}
export default App;
