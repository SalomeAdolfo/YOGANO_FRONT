import React from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, Outlet } from 'react-router'

const IsLoggedUser = ({ redirectPath = '/' }) => {
    const { isAuthenticated } = React.useContext(AuthContext)
    if (isAuthenticated) {
        return <Outlet />
    } else {
        return <Navigate to={redirectPath} />
    }
}

export default IsLoggedUser