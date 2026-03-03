import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { authContext } from "./AuthProvider";
import Loader from "../component/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  //   console.log(location.pathname);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
};

export default PrivateRoute;
