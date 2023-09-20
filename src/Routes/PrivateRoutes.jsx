import { Navigate, useLocation, useNavigate } from "react-router-dom";
import React, { useContext } from "react";

import UseSpinner from "../Hooks/UseSpinner";
import useAuth from "../Hooks/useAuth";

// import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  
  if (loading) {
    return <UseSpinner></UseSpinner>;
  }
  if (user?.email) {
    return children;
  }
  return (
     <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoutes;
