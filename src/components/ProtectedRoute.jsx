import React from 'react'
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const paid = localStorage.getItem("contact_paid");

    // If user paid → allow access
    if(paid === 'true') {
        return children;
    }

    // If not paid → redirect
    return <Navigate to='/pay' />
};

export default ProtectedRoute