import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Auth.css";
import { ErrorPrompt } from "../../shared/components/ErrorPrompt/ErrorPrompt";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(process.env.REACT_APP_SERVER_URL + "/auth/register", {
        username,
        email,
        password,
      });
      //Upon successful registration, redirect to login page
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="auth">
      <h2 className="serifTitle">Register</h2>
      <form className="authForm" onSubmit={handleSubmit}>
        <h5 className="serifTitle">Username</h5>
        <input
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <h5 className="serifTitle mt-2">Email</h5>
        <input
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5 className="serifTitle mt-2">Password</h5>
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="authButton" type="submit">
          Register
        </button>
      </form>
      <button className="switchAuthButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <ErrorPrompt />}
    </div>
  );
}
