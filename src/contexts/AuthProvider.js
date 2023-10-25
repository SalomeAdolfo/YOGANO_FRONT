import React from "react";
import { baseURL } from "../constants/route";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const notify = (message, type) => {
        toast[type](message)
    }
    //const [userData, setUSerData] = React.useState(undefined);
    const [roles, setRoles] = React.useState([])
    async function getUserStatus() {
        const response = await fetch(`${baseURL}auth/checkUser`, {
            credentials: 'include'
        })
        if (response.ok) {
            const json = await response.json()
            window.sessionStorage.setItem('userData', JSON.stringify({ usuario: json.username }))
            setRoles(json.roles)
            setIsAuthenticated(true)
        } else {
            window.sessionStorage.removeItem('userData')
            setRoles([])
        }
    }
    React.useEffect(() => {
        getUserStatus()
    }, [])
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, roles: roles, getUserStatus, setRoles, notify }}>
            {children}
        </AuthContext.Provider>
    )
}