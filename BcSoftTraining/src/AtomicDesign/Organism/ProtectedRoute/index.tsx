import { Navigate, useLocation } from "react-router-dom";
import { Auth } from "../../../Services/Observer/AuthObserver";
import { useSyncExternalStore } from "react";

function ProtectedRoute({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const location = useLocation();
  const token = useSyncExternalStore(Auth.onSubscribe('token'), Auth.getState('token'));
  
  if (token) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default ProtectedRoute;
