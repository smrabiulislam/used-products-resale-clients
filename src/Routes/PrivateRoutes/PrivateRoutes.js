import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <button>Loading...</button>
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoutes;