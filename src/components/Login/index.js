import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import graphic from "../../assets/interface.png";
import "./styles.css";

function Login() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      history.push("/listings");
    }
  };

  const disabled = email === "" || password === "";

  return (
    <div className="login">
      <div className="login__left">
        <h5>Welcome!</h5>
        <div className="login__graphic">
          <img src={graphic} alt="graphic" />
        </div>
      </div>
      <div className="login__right">
        <form action="" onSubmit={handleLogin}>
          <h5>Login</h5>
          <div className="login__email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} disabled={disabled}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
