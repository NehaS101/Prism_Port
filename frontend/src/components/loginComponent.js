import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../services/loginService";
import "../modules/login.css";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    try {
      const response = await LoginService.login(loginData);
      alert(response.message);
      navigate("/");
    } catch (error) {
      let e = await error.json();
      alert(e);
    }
    // try {
    //   const loginData = {
    //     email: email,
    //     password: password,
    //   };

    //   const response = await LoginService.login(loginData);
    //   alert(response.message);

    //   // Clear form fields after successful login
    //   setEmail('');
    //   setPassword('');
    // } catch (error) {
    //   console.error('Error logging in:', error);
    // }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <hr className="login-hr"></hr>
      <form onSubmit={handleLogin}>
        <h3>Write your email address</h3>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <h3>Write your password</h3>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
