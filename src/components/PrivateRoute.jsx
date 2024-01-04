import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
    const token = Cookies.get("token")

    if (!token) {
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute
