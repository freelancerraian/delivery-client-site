import React from 'react';
import './header.css';
import logo from '../../img/logo.png';
import userimg from "../../img/user.jpg";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid container">
              <img className="custom-logo" src={logo} alt="" />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item cus-style">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item cus-style">
                    <NavLink className="nav-link" to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item cus-style">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item cus-style">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item cus-style">
                    <NavLink className="nav-link" to="/dashboard">
                      DashBoard
                    </NavLink>
                  </li>
                  <li className="nav-item cus-style">
                    <NavLink className="nav-link" to="/updateservice">
                      Manage Service
                    </NavLink>
                  </li>
                  <li className="nav-item cus-style">
                    <NavLink className="nav-link" to="/orders">
                      All Orders
                    </NavLink>
                  </li>
                </ul>
                <div className="d-flex head-login-sec">
                  <div className="user-info d-flex">
                    <span>
                      <h5>{user.displayName}</h5>
                    </span>
                    {user.photoURL ? (
                      <span>
                        <img
                          className="user-img img-thumbnail"
                          src={user.photoURL}
                          alt=""
                        />
                      </span>
                    ) : (
                      <span>
                        <img
                          className="user-img img-thumbnail"
                          src={userimg}
                          alt=""
                        />
                      </span>
                    )}
                  </div>
                  {user.email ? (
                    <button
                      className="login head-btn p-2 btn ml-2"
                      onClick={logout}
                    >
                      <nav className="btn-nav">
                        <ul className="btn-ul">
                          <li className="btn-li">
                            Sign Out
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </li>
                        </ul>
                      </nav>
                    </button>
                  ) : (
                    <NavLink className="btn login head-btn" to="/login">
                      <nav className="btn-nav">
                        <ul className="btn-ul">
                          <li className="btn-li">
                            Login
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </li>
                        </ul>
                      </nav>
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
};

export default Header;