import React from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { baseURL } from '../constants/route'

function PedidosPage() {

    const { notify } = React.useContext(AuthContext)
    return (
        <section className='container-fluid row' style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='text-center' src={process.env.PUBLIC_URL + "/img/LOGO_YOGANO.jpg"} alt={'YOGANO'} height={'300px'} width={'320px'} />
            </div>
            <div className="col-lg-8 d-flex justify-content-center align-content-center">
                <Formik
                    initialValues={{
                        domicilio: '',
                        no_tel: '',
                        cantidad: '',
                        correo: ''
                    }}
                    onSubmit={(values) => {
                        values.total_a_pagar = parseInt(values.cantidad) * 30
                        async function setPedido() {
                            const res = await fetch(`${baseURL}payment/create-order`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                credentials: 'include',
                                body: JSON.stringify({
                                    ...values
                                })
                            })
                            if (res.ok) {
                                notify('Pedido generado correctamente, por favor, revisa tu correo de entrada.', 'success')
                                const json = await res.json();
                                window.open(json.link, '_blank'); // '_blank' indica que se abrirá en una nueva pestaña
                            }
                        }

                        setPedido()
                    }}
                    validationSchema={Yup.object().shape({
                        domicilio: Yup.string().required("Dato requerido"),
                        no_tel: Yup.string().required("Dato requerido"),
                        cantidad: Yup.string().required("Dato requerido"),
                        correo: Yup.string().email("Escribe un email válido.")
                    })}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <h1 className='fw-bold text-center'>Solicitud de pedido</h1>
                            <div className="mb-3  d-flex flex-column" style={{ width: '100vh', height: '100px' }}>
                                <span className="text-warning fw-bold">
                                    Domicilio:
                                </span>
                                <input
                                    autoFocus
                                    type="text"
                                    name='domicilio'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.domicilio}

                                />
                                {errors.domicilio && touched.domicilio && <div>{errors.domicilio}</div>}
                            </div>

                            <div className="mb-3 d-flex flex-column" style={{ width: '100vh', height: '100px' }}>
                                <span className="text-warning fw-bold">
                                    Teléfono:
                                </span>
                                <input
                                    autoFocus
                                    type="text"
                                    name='no_tel'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.no_tel}

                                />
                                {errors.no_tel && touched.no_tel && <div>{errors.no_tel}</div>}
                            </div>

                            <div className="mb-3 d-flex flex-column" style={{ width: '100vh', height: '100px' }}>
                                <span className="text-warning fw-bold">
                                    Correo:
                                </span>
                                <input
                                    autoFocus
                                    type="text"
                                    name='correo'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.correo}

                                />
                                {errors.correo && touched.correo && <div>{errors.correo}</div>}
                            </div>

                            <div className="mb-3 d-flex flex-column" style={{ width: '100vh', height: '100px' }}>
                                <span className="text-warning fw-bold">
                                    Cantidad de productos:
                                </span>
                                <input
                                    autoFocus
                                    type="text"
                                    name='cantidad'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.cantidad}

                                />
                                {errors.cantidad && touched.cantidad && <div>{errors.cantidad}</div>}
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button type="submit" className='btn btn-secondary'>
                                    Enviar
                                </button>
                            </div>
                        </form>
                    )}

                </Formik>

            </div>
        </section>
    )
}

export default PedidosPage