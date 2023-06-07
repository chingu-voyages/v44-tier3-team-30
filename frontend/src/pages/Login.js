import React from "react";
import { useState } from "react";
import { useNavigate,  } from "react-router-dom";
import axios from "axios";
import { authActions } from "../redux/store";
import { useDispatch } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //state
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });
  
    //handle input change
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    //form handle
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post("/api/ver1/user/login", {
          email: inputs.email,
          password: inputs.password,
        });
        if (data.success) {
          // Local storage to store id of the user when logging in
          localStorage.setItem("userId", data?.user._id);
          dispatch(authActions.login());
          alert('Successfully Logged In')
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
      <div onSubmit={handleSubmit}>
      <div>
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  name="email"
                  type="text"
                  class="login__input"
                  required
                  placeholder="Email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  name="password"
                  type="password"
                  class="login__input"
                  placeholder="Password"
                  required
                  value={inputs.password}
                  onChange={handleChange}
                />
              </div>
              <button class="button login__submit" >
                <span class="button__text" >Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div class="social-login">
              <h3>Not A User?</h3>
              <div class="social-icons">
                <button onClick={() => navigate("/")} class="social-login__icon">
                  Register Now!
                </button>
              </div>
            </div>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Login;
