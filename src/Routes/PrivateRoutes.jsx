import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import UseSpinner from '../Hooks/UseSpinner';

const PrivateRoutes = ({children}) => {
      const {user, loading} = useContext(AuthContext);
      const location = useLocation();
      if(loading){
            return <UseSpinner></UseSpinner>
      }
      if(user) {
            return children ;
      }
      return <Navigate to="/login" state={{form: location}} replace></Navigate>
};

export default PrivateRoutes;