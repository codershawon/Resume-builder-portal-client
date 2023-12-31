import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAdmin from "../Hooks/useAdmin";
import UseSpinner from "../Hooks/UseSpinner";
import { AuthContext } from "../Providers/AuthProvider";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

  
    if(loading || isAdminLoading){
        return <UseSpinner></UseSpinner>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;