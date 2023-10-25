import React from 'react'
import '../src/styles/HomeStyles.css'
import CardComponent from './components/CardComponent'
function App() {
  return (
    <main className='container-fluid'>
      <section className='row'>

        <div className='col-lg-12 bg-white'>
          <nav className="navbar navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Toluca</a>
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
                      <a className="nav-link" href="#">Carrito</a>
                    </li>
                    <li className="nav-item dropdown">
                      <span className="nav-link dropdown-toggle" id="dropdownId" style={{cursor: 'pointer'}} data-bs-toggle="dropdown"
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

        <div className='col-lg-12 cards__container'>
          <CardComponent />
        </div>
      </section>
    </main>
  )
}

export default App