import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to="/=">
            <button>Home</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
          <li>
            <a href="/">Create Blog</a>
          </li>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
