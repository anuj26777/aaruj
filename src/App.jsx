import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Registration';
import Blog from './components/Blog';
import Dashboard from './components/Dashbord';
import CreatePost from './components/Blog/CreatePost';
import GetPosts from './components/Blog/GetPosts';
import EditPost from './components/Blog/EditPost';


const App = () => {
  return (
    
    <div className='bg-red-400 text-white'>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/get-posts" element={<GetPosts />} />
        <Route path="/edit-post/:id" element={<EditPost />} />

      </Routes>
    </Router>
  
  </div>
  )
}

export default App