import React from "react";

import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";

import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");

  const [password, setPassword] = React.useState("");

  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyItems: "center",
      }}

      className="login-admin"
    >
      <h1 style={{ margin: 20, marginTop: 200 }}>ADMIN DASHBOARD</h1>

      <input
        type="text"
        placeholder="username"
        style={{ margin: 20 }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        style={{
          margin: 20,
          backgroundColor: "teal",
          color: "white",
          padding: 10,
          border: "none",
          width: 100,
          borderRadius: "3px",
        }}
      >
        Login
      </button>

      {user.currentUser ? <Redirect to="/home" /> : ""}

      {error ? (
        <span style={{ color: "red" }}>This is an admin page. </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
