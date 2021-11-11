import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";
import Loader from "react-loader-spinner";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div>
        <center style={{ marginTop: "15%" }}>
          <Loader type="Circles" color="#7f7fd5" height={80} width={80} />
        </center>
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
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
