import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { Navigate } from "react-router-dom";
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    console.log(location.pathname)




    if (!user) {
        if (loading) {
            return <Loading />
        }
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;