
import './App.css';
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Blogs from './pages/Blogs';
import Register from './pages/Register';
import Login from './pages/Login'
import UserBlogs from './pages/UserBlogs'
import CreateBlog from './pages/CreateBlog'

function App() {
  return (
   <>
    <Navbar/>
   <Routes>
      <Route path="/" element={<Blogs/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/my-blogs" element={<UserBlogs/>}/>
      <Route path="/create-blog" element={<CreateBlog/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {/* <Route path="/create-blog" element={<createNewBlog/>}/> */}
    </Routes>
   </>
  );
}

export default App;
