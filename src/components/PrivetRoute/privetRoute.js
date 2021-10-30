import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

// import { Spinner } from "react-bootstrap";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/registration",
              state: { from: location },
            }}
          ></Redirect>,
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivetRoute;