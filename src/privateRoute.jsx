import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import auth from "./pages/auth/auth";

const PrivateRoute = () => {
  return auth.isLoggedIn ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
