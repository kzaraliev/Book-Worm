import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Path from "../paths";
import AuthContext from "../context/authContext";

export default function LoggedInGuard() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to={Path.Home} />;
  }

  return <Outlet />;
}
