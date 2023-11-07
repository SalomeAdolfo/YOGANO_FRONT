import React from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, Outlet } from 'react-router'

const AdminProtectedRoutes = ({ redirectPath = '/' }) => {
    const { roles, isAuthenticated } = React.useContext(AuthContext)
    if (isAuthenticated) {
        if (roles[0].name === 'Administrador') {
            console.log(roles[0].name === 'Administrador')
            return <Outlet />
        } else {
            return <Navigate to={redirectPath} />
        }
    }
}

export default AdminProtectedRoutes