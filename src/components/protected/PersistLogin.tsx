import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";

const PersistLogin = () => {
  const { auth } = useAuth();
  return <div>PersistLogin</div>;
};

export default PersistLogin;
