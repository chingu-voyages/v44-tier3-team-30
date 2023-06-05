import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    name: "",
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
  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/ver1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        alert("User Register Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
console.log(inputs)
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
                  name="name"
                  type="text"
                  class="login__input"
                  placeholder="Name"
                  value={inputs.name}
                  onChange={handleChange}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  name="email"
                  type="text"
                  class="login__input"
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
                  value={inputs.password}
                  onChange={handleChange}
                />
              </div>
              <button class="button login__submit">
                <span class="button__text">Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div class="social-login">
              <h3>Already A User?</h3>
              <div class="social-icons">
                <a href="#" class="social-login__icon">
                  Login
                </a>
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

export default Register;
