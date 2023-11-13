import React from 'react'
import { baseURL } from '../constants/route'
import { useNavigate } from 'react-router'

function MisPedidosPage() {
    const [data, setData] = React.useState()
    const navigate = useNavigate()
    React.useEffect(() => {
        (async function () {
            const response = await fetch(`${baseURL}pedidos/comprador`, {
                headers: {
                    'Accept': 'application/json'
                },
                credentials: 'include'
            })
            if (response.ok) {
                const json = await response.json()
                setData(json)
                console.log(json)
            }
        })()
    }, [])
    return (
        <>
            {
                data ? <section className='container-fluid bg-light'>
                    <h1 className='text-info fw-bold text-center'>Listado de pedidos totales</h1>
                    <div className="table-responsive p-2">
                        <table className="table table-striped
                    table-hover	
                    table-borderless
                    align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Cantidad</th>
                                    <th>Pago total</th>
                                    <th>Solicitante</th>
                                    <th>Fecha/solicitud</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {
                                    data.map((el, idx) =>
                                        <tr key={idx}>
                                            <td>{el.cantidad}</td>
                                            <td>{el.total_a_pagar}</td>
                                            <td>{el.solicitante.name}</td>
                                            <td>{el.createdAt}</td>
                                            <td><button className='btn btn-primary' onClick={() => navigate(`/pedido/${el._id}`)}>Detalles de pedido</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>
                    </div>

                </section> : 'No hay nada'
            }
        </>
    )
}

export default MisPedidosPage