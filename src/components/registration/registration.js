import "./registration.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
  const auth = getAuth();

  const { signInusingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";
  // google login
  const handleGoogleLogin = () => {
    signInusingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  // genarel login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewRegistration = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password Must Be 6 Charectar");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password, Name)
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="log-style">
      <div className="container">
        <div className="row">
          <div className="col-12 py-5 d-flex justify-content-center">
            <div className="main-login">
              <form
                onSubmit={handleNewRegistration}
                className="my-5 p-4 rounded shadow mx-auto"
              >
                <h1 className="mb-5">Create an Acount</h1>
                <div className="form-floating">
                  <input
                    onBlur={handleNameChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  ></input>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Name
                  </label>
                </div>
                <div className="form-floating mt-3">
                  <input
                    type="email"
                    onBlur={handleEmailChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  ></input>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Email
                  </label>
                </div>
                <br />
                <div className="form-floating">
                  <input
                    type="password"
                    onBlur={handlePasswordChange}
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                  ></input>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                </div>
                <br />
                <p className="mt-2 err">{error}</p>
                <div className="d-flex justify-content-center">
                  <button className="btn m-2 login head-btn" type="submit">
                    Sign Up
                  </button>
                </div>
                <div className="d-flex sign-up">
                  <p className="mt-2">Already Have Acount ?</p>
                  <Link className="m-2" to="/login">
                    Login
                  </Link>
                </div>
                <hr className="cus-hr" />
                <div className="online-login">
                  <div className="d-flex justify-content-center">
                    <button
                      className="registar"
                      onClick={handleGoogleLogin}
                    >
                      <nav className="btn-nav">
                        <ul className="btn-ul">
                          <li className="btn-li">
                            Google Sign Up
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </li>
                        </ul>
                      </nav>
                    </button>
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;