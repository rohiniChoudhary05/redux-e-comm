import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PublicRouter = ({ children }) => {
  const { user } = useSelector((state) => state.Auth);

  console.log("PUBLIC ROUTER USER =>", user);

  if (user) {
    return <Navigate to="/home" />;
  }

  return children;
};
export default PublicRouter;
