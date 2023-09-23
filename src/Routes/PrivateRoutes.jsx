import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import UseSpinner from '../Hooks/UseSpinner';

const PrivateRoutes = ({children}) => {
    const {user,loading
    }=useAuth()
    const location=useLocation()
    if(loading){
        return  <UseSpinner/>
    }

    if(user){
        return children
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoutes;















