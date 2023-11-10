import React from 'react'
import '../src/styles/HomeStyles.css'
//import { useNavigate } from 'react-router'
import { AuthContext } from './contexts/AuthProvider';
import { baseURL } from './constants/route';
import { promocionesYogurVegano } from './constants/information';
function App() {
  const { isAuthenticated, notify, setRoles, roles } = React.useContext(AuthContext);

  //const navigate = useNavigate();

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
    <div className="container-fluid">
      <div className='col-lg-12 bg-white'>
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <span className="navbar-brand">Toluca</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
              aria-labelledby="o ffcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" id="dropdownId" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">{isAuthenticated ? (JSON.parse(window.sessionStorage.getItem('userData')).usuario || "") : 'Usuario'}</span>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      {!isAuthenticated ? (
                        <>
                          <a className="dropdown-item" href="/login">Log In</a>
                          <a className="dropdown-item" href="/signup">Sign Up</a>
                        </>
                      ) : (
                        <>
                          {isAuthenticated && roles.length !== 0 && roles[0].name === 'Comprador' && <a className="dropdown-item" href="/pedidos">Pedidos</a>}
                          {isAuthenticated && roles.length !== 0 && roles[0].name === 'Administrador' && <a className="dropdown-item" href="/pedidos/admin">Pedidos realizados</a>}
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
          </div>
        </nav>

      </div>
      <div className='product__name'>
        <h1 className='fw-bold text-center'>
          YOGANO
        </h1>
      </div>
      {/** Body de imágenes */}
      <div className='card_container m-5'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) =>
            <div key={idx} className='card'>
              <div className='card_image'>
                <img src={process.env.PUBLIC_URL + `/img/Producto${el}.jpg`} alt='Imagen Yogano' />
              </div>
              <div className='card_info'>
                <span>{promocionesYogurVegano[idx].titulo}</span>
                <p>{promocionesYogurVegano[idx].description}</p>
              </div>
              <div className='comprar__item'>+</div>
            </div>
          )
        }
      </div>
      <div className='w-100 sticky-bottom'>
        {/**Footer */}
        <footer className="row">
          <div className='col-md-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            <span className='text__footer'>Conócenos.</span>
            <div className='w-100 logos__redes' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <div className='p-3' style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src={process.env.PUBLIC_URL + "/logos/facebook.png"} alt='X' />
                <a href='https://facebook.com'>Facebook</a></div>

              <div className='p-3' style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src={process.env.PUBLIC_URL + "/logos/instagram.jpg"} alt='X' />
                <a href='https://instagram.com'>Instagram</a>
              </div>

              <div className='p-3' style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src={process.env.PUBLIC_URL + "/logos/x.png"} alt='X' />
                <a href='https://tiktok.com'>X</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App
