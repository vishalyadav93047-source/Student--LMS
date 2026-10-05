import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ role, children }) {
  const { student, admin } = useAuth();
  const location = useLocation();

  if (role === "student" && !student) {
    return <Navigate to="/student/login" replace state={{ from: location.pathname }} />;
  }

  if (role === "admin" && !admin) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute;
