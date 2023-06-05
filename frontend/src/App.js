
import './App.css';
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Blogs from './pages/Blogs';
import Register from './pages/Register';
import Login from './pages/Login'

function App() {
  return (
   <>
    <Navbar/>
   <Routes>
      <Route path="/" element={<Blogs/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {/* <Route path="/create-blog" element={<createNewBlog/>}/> */}
    </Routes>
   </>
  );
}

export default App;
