import React from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { baseURL } from '../constants/route'
import { Link } from 'react-router-dom'

function NavBarComponent() {
    const { isAuthenticated, notify, setRoles, roles } = React.useContext(AuthContext)
    async function logOut() {
        const response = await fetch(`${baseURL}auth/logOut`, {
            credentials: 'include'
        })
        if (response.ok) {
            window.location.reload()
            notify('Sesión cerrada con éxito', 'info')
            setRoles([])
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={process.env.PUBLIC_URL + '/img/LOGO_EMPRESA.png'} alt='Lenus Vegan Logo' />
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-1 mt-lg-0">
                            {
                                isAuthenticated && <li className="nav-item">
                                    <Link className="nav-link" to="/pedidos">Realizar pedido</Link>
                                </li>
                            }
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}>
                                    {isAuthenticated ? (JSON.parse(window.sessionStorage.getItem('userData')).usuario || "") : 'User'}
                                </span>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    {!isAuthenticated ? (
                                        <>
                                            <a className="dropdown-item" href="/login">Log In</a>
                                            <a className="dropdown-item" href="/signup">Sign Up</a>
                                        </>
                                    ) : (
                                        <>
                                            {isAuthenticated && roles.length !== 0 && roles[0].name === 'Comprador' && <Link className="dropdown-item" to="/mis/pedidos">Mis pedidos</Link>}
                                            {isAuthenticated && roles.length !== 0 && roles[0].name === 'Administrador' && <Link className="dropdown-item" to="/pedidos/admin">Pedidos realizados</Link>}
                                            <span style={{ cursor: 'pointer' }} className="dropdown-item" onClick={() => {
                                                let confirm = window.confirm("¿Deseas cerrar sesión?")
                                                if (confirm) {
                                                    logOut()
                                                }
                                            }} >Log out</span>
                                        </>
                                    )}

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBarComponent