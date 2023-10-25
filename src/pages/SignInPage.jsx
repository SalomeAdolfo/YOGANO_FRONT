import React from 'react'
import { useNavigate } from 'react-router'
import { baseURL } from '../constants/route'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../contexts/AuthProvider'

function SignInPage() {
    const { setIsAuthenticated, getUserStatus, notify } = React.useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <section className='container-fluid row'>
            <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='text-center' src={process.env.PUBLIC_URL + "/img/LOGO_YOGANO.jpg"} alt={'YOGANO'} height={'300px'} width={'320px'} />
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
                <article style={{ width: '70%' }}>
                    <h1 className='fw-bold text-center'>Inicio de sesión</h1>
                    <Formik
                        initialValues={{
                            usuario: '',
                            password: ''
                        }}
                        onSubmit={(values) => {
                            async function logIn() {
                                const res = await fetch(`${baseURL}auth/signIn`, {
                                    method: 'POST',
                                    credentials: 'include',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        username: values.usuario,
                                        password: values.password
                                    })
                                })
                                if (res.ok) {
                                    setIsAuthenticated(true)
                                    window.sessionStorage.setItem('userData', JSON.stringify({ usuario: values.usuario }));
                                    notify(`Bienvenido ${values.usuario}`, 'success')
                                    navigate('/', { replace: true })
                                    getUserStatus()
                                }
                                if (res.status === 401 || res.status === 500 || res.status === 400) {
                                    notify('Usuario no válido', 'info')
                                    console.clear()
                                }
                            }
                            logIn()
                        }}
                        validationSchema={Yup.object().shape({
                            usuario: Yup.string().required('El usuario es requerido'),
                            password: Yup.string().required('Password requerida')
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
                                <div className="mb-3 sectionInput">
                                    <span className='text-warning fw-bold'>Usuario:</span>
                                    <input
                                        autoFocus
                                        type='text'
                                        name='usuario'
                                        className='form-control'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete='current-user'
                                        value={values.usuario} />
                                    {errors.usuario && touched.usuario && <div className='error__message'>{errors.usuario}</div>}
                                </div>
                                <div className='mb-3 sectionInput'>
                                    <span className='text-warning fw-bold'>Password:</span>
                                    <input
                                        type='password'
                                        name='password'
                                        className='form-control'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete='current-password'
                                        value={values.password} />
                                    {errors.password && touched.password && <div className='error__message'>{errors.password}</div>}
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button type="submit" className='btn btn-secondary'>
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </article>
            </div >
        </section >
    )
}

export default SignInPage