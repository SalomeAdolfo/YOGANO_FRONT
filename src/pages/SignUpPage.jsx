import React from 'react'
import { useNavigate } from 'react-router'
import { baseURL } from '../constants/route'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../contexts/AuthProvider'
function SignUpPage() {
  const {notify} = React.useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <section className='container-fluid row' style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img className='text-center shadow' src={process.env.PUBLIC_URL + "/img/LOGO_YOGANO.png"} alt={'YOGANO'} height={'300px'} width={'300px'} style={{borderRadius: '100%'}} />
      </div>
      <div className="col-lg-8 d-flex justify-content-center">
        <article style={{ width: '70%' }}>
          <h1 className='fw-bold text-center'>Registro</h1>
          <Formik
            initialValues={{
              name: '',
              apellido_paterno: '',
              apellido_materno: '',
              username: '',
              password: '',
            }}
            onSubmit={(values) => {
              values.roles = ['Comprador']
              console.log(values)
              async function setUser() {
                try {
                  const response = await fetch(`${baseURL}auth/signUp`, {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      ...values
                    })
                  })
                  if (response.ok) {
                    notify('Usuario registrado', 'success')
                    navigate('/login', {replace: true})
                  }
                } catch (error) {
                  console.log(error)
                }
              }
              setUser()
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Nombre es requerido'),
              apellido_paterno: Yup.string().required('Apellido paterno es requerido'),
              apellido_materno: Yup.string().required('Apellido materno es requerido'),
              username: Yup.string().required('Username requerido'),
              password: Yup.string().required('Contraseña requerida')
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
                  <span className='text-warning fw-bold'>Nombre:</span>
                  <input
                    autoFocus
                    type='text'
                    name='name'
                    className='form-control'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name} />
                  {errors.name && touched.name && <div className='text-danger fw-bold'>{errors.name}</div>}
                </div>

                <div className="mb-3 sectionInput">
                  <span className='text-warning fw-bold'>Apellido paterno:</span>
                  <input
                    autoFocus
                    type='text'
                    name='apellido_paterno'
                    className='form-control'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.apellido_paterno} />
                  {errors.apellido_paterno && touched.apellido_paterno && <div className='text-danger fw-bold'>{errors.apellido_paterno}</div>}
                </div>


                <div className="mb-3 sectionInput">
                  <span className='text-warning fw-bold'>Apellido materno:</span>
                  <input
                    autoFocus
                    type='text'
                    name='apellido_materno'
                    className='form-control'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.apellido_materno} />
                  {errors.apellido_materno && touched.apellido_materno && <div className='text-danger fw-bold'>{errors.apellido_materno}</div>}
                </div>

                <div className="mb-3 sectionInput">
                  <span className='text-warning fw-bold'>Usuario:</span>
                  <input
                    autoFocus
                    type='text'
                    name='username'
                    className='form-control'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete='current-user'
                    value={values.username} />
                  {errors.username && touched.username && <div className='text-danger fw-bold'>{errors.username}</div>}
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
                  {errors.password && touched.password && <div className='text-danger fw-bold'>{errors.password}</div>}
                </div>
                <div className='d-flex justify-content-center'>
                  <button type="submit" className='btn btn-success text-white fw-bold p-3'>
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </article>
      </div>
    </section>
  )
}

export default SignUpPage