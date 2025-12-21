import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PublicRouter = ({ children }) => {
  let { User } = useSelector((state) => state.Auth);

  if (User) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default PublicRouter;
