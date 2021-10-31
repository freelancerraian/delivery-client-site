import "./registration.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
  const auth = getAuth();

  const { signInusingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [Data, setData] = useState([]);
  const redirect_url = location.state?.from || "/";

  useEffect(() => {
    fetch("https://obscure-shelf-23886.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // google login
  const handleGoogleLogin = () => {
    signInusingGoogle().then((result) => {
      history.push(redirect_url);
      const email = result.user.email;
      const name = result.user.displayName;
      const photo = result.user.photoURL;
      const newUser = { name, email, photo };
      setError("");
      
      let flag = 0;
      for (const singleData of Data) {
        if (singleData.email === email) {
          flag = 1;
          return;
        }
      }
       if (flag === 0) {
         fetch("https://obscure-shelf-23886.herokuapp.com/users", {
           method: "POST",
           headers: { "content-type": "application/json" },
           body: JSON.stringify(newUser),
         })
           .then((res) => res.json())
           .then((data) => {
             if (data.insertedId) {
               alert("Successfully added the user.");
               // e.target.reset();
             }
           });
       }

    })

  };

  // genarel login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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

    createUserWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
        history.push(redirect_url);

        const email = result.user.email;
        const name = result.user.displayName;
        const photo = result.user.photoURL;
        const newUser = { name, email, photo };
        setError("");

        let flag = 0;
        for (const singleData of Data) {
          if (singleData.email === email) {
            flag = 1;
            return;
          }
        }
        if (flag === 0) {
          fetch("https://obscure-shelf-23886.herokuapp.com/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                alert("Successfully added the user.");
                // e.target.reset();
              }
            });
        }

      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="log-style">
      <div className="container">
        <div className="row main-login">
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
                  <button
                    className="btn m-2 login head-btn btn-primary"
                    type="submit"
                  >
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
                    <button className="registar" onClick={handleGoogleLogin}>
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