import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const [user, setUser] = useState(true);
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
