import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const auth = getAuth();
  const redirect_uri = location.state?.from || "/";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    processLogin(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleRegistration}
        className="my-5 p-4 rounded shadow mx-auto"
        style={{ maxWidth: "25rem" }}
      >
        <div className="mb-3">
          <h1 className="mb-5">Enter an Acount</h1>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onBlur={handleEmailChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onBlur={handlePasswordChange}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="pt-5 text-center">
          <div className="d-flex sign-up">
            <p className="mt-2">Don't Have Acount ?</p>
            <Link className="m-2" to="/registration">
              Sign Up
            </Link>
          </div>
          <hr className="cus-hr" />
        </div>
        <br />
      </form>
    </div>
  );
};

export default Login;
