import React from "react";
import { useContext } from "react";
import { AuthContext } from "../pages/Provider/AuthProvider";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  return <div></div>;
};

export default PrivateRoute;
