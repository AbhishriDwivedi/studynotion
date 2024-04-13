import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLoggedIn }) => {
    if (isLoggedIn) {
        // dashboard is child
        return children;
    }
    else {
        return <Navigate to="/login" />;
    }
}

export default PrivateRoute