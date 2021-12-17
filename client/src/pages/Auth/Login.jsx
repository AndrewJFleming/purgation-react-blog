import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import axios from "axios";

import { Context } from "../../shared/context/Context";
import "./Auth.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="auth">
      <h2 className="serifTitle">Login</h2>
      <form className="authForm" onSubmit={handleSubmit}>
        <h5 className="serifTitle">Username</h5>
        <input type="text" placeholder="Enter your username..." ref={userRef} />
        <h5 className="serifTitle mt-2">Password</h5>
        <input
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="authButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="switchAuthButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
