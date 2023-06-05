import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
     // global state
     let isLogin = useSelector((state) => state.isLogin);
     console.log(isLogin)
    //state
    const [value, setValue] = useState()

  return (
    <>
      <div className="header">
        {/* anchor tag for loading home page on clicking the image */}
        <a href="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4922/4922073.png"
            alt="logo"
          ></img>
        </a>
        <h1>My Blog App</h1>
        <ul className="nav-items">
        {isLogin && (
            <div value={value}
                onChange={(e, val) => setValue(val)}>
            <Link to="/">
            <button>Home</button>
          </Link>
          
          <li>
            <a href="/">Create Blog</a>
          </li>

            <Link to="/blog">
            <button>All Blogs</button>
          </Link>

          <Link to="/">
            <button>My Blogs</button>
          </Link>
          
            </div>
        )}
        {!isLogin &&(
            <>
            <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
            
          
            </>
        )}
        {isLogin &&(
            <Link to="/login">
            <button>Logout</button>
          </Link>
        )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
