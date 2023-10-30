import React from 'react'
import '../src/styles/HomeStyles.css'
function App() {
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
              aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Carrito</a>
                  </li>
                  <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" id="dropdownId" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Usuario</span>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      <a className="dropdown-item" href="/login">Log In</a>
                      <a className="dropdown-item" href="/signup">Sign Up</a>
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
      <div className='parent'>
        <section className="div2">
          <div className='product__img_header'>
            <img src={process.env.PUBLIC_URL + "/img/Producto1.jpg"} alt='Producto 1' />
          </div>
          <div className='product__info'>
            Información de producto 1
          </div>
        </section>

        <section className="div4">
          <div className='product__img_header'>
            <img src={process.env.PUBLIC_URL + "/img/Producto2.jpg"} alt='Producto 2' />
          </div>
          <div className='product__info'>
            Información de producto 2
          </div>
        </section>

        <section className="div3">
          <div className='product__img_header'>
            <img src={process.env.PUBLIC_URL + "/img/Producto3.jpg"} alt='Producto 3' />
          </div>
          <div className='product__info'>
            Información de producto 3
          </div>
        </section>

        <section className="div6">
          <div className='product__img_header'>
            <img src={process.env.PUBLIC_URL + "/img/Producto4.jpg"} alt='Producto 4' />
          </div>
          <div className='product__info'>
            información producto 4
          </div>
        </section>

        <section className="div5">
          <div className='product__img_header'>
            <img src={process.env.PUBLIC_URL + "/img/Producto6.jpg"} alt='Producto 5' />
          </div>
          <div className='product__info'>
            Información de producto 5
          </div>
        </section>

        <section className="div7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className='text-center'>
            <span className='text-black fw-bold' style={{ fontSize: '20px' }}>¿Deseas probarlo?</span>
          </div>
          <div className='text-center'>
            <button className='btn btn-info text-white fw-bold'>
              Comprar
            </button>
          </div>
        </section>
        {/**Footer */}
        <footer className="div1 row">
          <div className='col-md-8' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            <span className='text-center fw-bold text-info'>Redes sociales</span>
            <div className='w-100' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='p-3' style={{ width: '100px', backgroundColor: 'red', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <a href='#'>Facebook</a></div>

              <div className='p-3' style={{ width: '100px', backgroundColor: 'red', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <a href='#'>Instagram</a>
              </div>

              <div className='p-3' style={{ width: '100px', backgroundColor: 'red', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <a href='#'>Tik tok</a>
              </div>
            </div>
          </div>
          <div className='col-md-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={process.env.PUBLIC_URL + '/img/LOGO_YOGANO.jpg'} alt='Yogano' style={{ width: '50%', height: '80%' }} />
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App
