import React from 'react'
import { AuthContext } from '../contexts/AuthProvider'
function PedidosPage() {

    const { isAuthenticated } = React.useContext(AuthContext)
    return (
        <div>PedidosPage</div>
    )
}

export default PedidosPage