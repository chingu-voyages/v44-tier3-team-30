import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../redux/store";

const Navbar = () => {
     // global state
     let isLogin = useSelector((state) => state.isLogin);
     isLogin = isLogin || localStorage.getItem("userId");
     const dispatch = useDispatch();
     const navigate = useNavigate();
    //state
    const [value, setValue] = useState()

     //logout
    const handleLogout = () => {
        try {
        dispatch(authActions.logout());
        alert("Logout Successfully");
        navigate("/login");
        localStorage.clear();
        } catch (error) {
        console.log(error);
        }
    };

  return (
    <>
      <div className="header">
        {/* anchor tag for loading home page on clicking the image */}
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_h-W-TsconcAmiEmRRpN_fLsisxJYh0WVyl4d24uw6EnxWh3pj40ZT1N4YPiRPaUBpk&usqp=CAU"
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
          
          <Link to="/create-blog">
            <button>Create Blog</button>
          </Link>

            <Link to="/blog">
            <button>All Blogs</button>
          </Link>

          <Link to="/my-blogs">
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
            <button onClick={handleLogout}>Logout</button>
          </Link>
        )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
