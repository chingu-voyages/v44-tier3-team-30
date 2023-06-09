import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
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
  const [value, setValue] = useState();

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
            <div value={value} onChange={(e, val) => setValue(val)} className="after-login-buttons">
              <Link to="/create-blog">
                <button className="navbar-btn">Create Blog</button>
              </Link>

              <Link to="/blogs">
                <button className="navbar-btn">All Blogs</button>
              </Link>

              <Link to="/my-blogs">
                <button className="navbar-btn">My Blogs</button>
              </Link>
            </div>
          )}
          {!isLogin && (
            <div className="before-login-buttons">
            <Link to="/register">
                <button className="navbar-btn">Register</button>
              </Link>
              <Link to="/login">
                <button className="navbar-btn">Login</button>
              </Link>
            </div>
          )}
          {isLogin && (
            <Link to="/login">
              <button className="navbar-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
