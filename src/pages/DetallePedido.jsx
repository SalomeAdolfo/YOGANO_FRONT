import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { baseURL } from '../constants/route'
import { AuthContext } from '../contexts/AuthProvider'

function DetallePedido() {
    const { id } = useParams()
    const { notify, roles } = React.useContext(AuthContext)
    const [data, setData] = React.useState([])
    const [numeroRastreo, setNumeroRastreo] = React.useState()
    const navigate = useNavigate()
    React.useEffect(() => {
        (async () => {
            const response = await fetch(`${baseURL}pedidos/${id}`, {
                credentials: 'include'
            })
            if (response.ok) {
                const json = await response.json()
                setData(json)
            } else {
                notify('No hay más detalles sobre este pedido', 'info')
            }
        })()
    }, [])

    const setNumberEnvio = async (numeroRastreo) => {
        try {
            const response = await fetch(`${baseURL}pedidos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    no_envio: numeroRastreo
                })
            })
            if (response.ok) {
                notify('Número de rastreo definido correctamente', 'success')
                navigate('..', {replace: true})
            } else {
                notify('Error en el número de rastreo.', 'warning')
            }
        } catch (error) {
            notify(error, 'info')
        }
    }

    const handleNumero = e => {
        setNumeroRastreo(e.target.value)
    }
    return (
        <section className='container-fluid' style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='card__detalle_pedido'>
                {data.length !== 0 ? <>
                    <h2 className='fw-bold text-center text-info m-2 p-2'>Datos del pedido</h2>
                    <p className='fw-lighter'>Solicita: <span className='fw-bold'>{data.solicitante.username || ''}</span></p>
                    <p className='fw-lighter'>Domicilio: <span className='fw-bold'>{data.domicilio}</span></p>
                    <p className='fw-lighter'>Teléfono: <span className='fw-bold'>{data.telefono}</span></p>
                    <p className='fw-lighter'>Fecha de solicitud: <span className='fw-bold'>{data.createdAt}</span></p>
                    <p className='fw-lighter'>Cantidad de productos: <span className='fw-bold'>{data.cantidad}</span></p>
                    <p className='fw-lighter'>Total de pago: <span className='fw-bold'>${data.total_a_pagar}</span></p>
                    <p className='fw-lighter'>Número de rastreo de paquete: {data.no_envio ? `${data.no_envio}` : (roles[0].name === 'Administrador' ? <><input type='text' className='form-control' onChange={handleNumero} /> <button className='btn btn-primary mt-1' onClick={() => setNumberEnvio(numeroRastreo)}>Enviar</button></> : <span className='fw-bold'>Por definir</span>)} </p>
                </> : <p>Datos no disponibles</p>}
            </div>
        </section>

    )
}

export default DetallePedido