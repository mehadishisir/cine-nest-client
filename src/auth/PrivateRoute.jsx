import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { authContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(authContext);
  const location = useLocation();
  console.log(location.pathname);
  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
};

export default PrivateRoute;
