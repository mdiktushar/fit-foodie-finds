import React, { useContext } from "react";
import { AuthContext } from "../providers/FirebaseAuthProvider";
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner animation="border" variant="success" />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to={`/login`} replace />;
};

export default PrivateRoute;
