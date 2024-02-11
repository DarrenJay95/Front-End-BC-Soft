import { Navigate, useLocation } from "react-router-dom";
import { Auth } from "../../../Services/Authentication";

function ProtectedRoute({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const location = useLocation();
  const token = Auth.getToken();
  if (token) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default ProtectedRoute;
