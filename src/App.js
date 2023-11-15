import React from 'react'
import '../src/styles/HomeStyles.css'
import { useNavigate } from 'react-router'
import { promocionesYogurVegano } from './constants/information';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import { AuthContext } from './contexts/AuthProvider';

function App() {
  const { isAuthenticated, notify } = React.useContext(AuthContext)
  const navigate = useNavigate();

  return (
    <div className="container-lg w-100">
      {/** Esto es el contenedor para renderizar el navbar de la página*/}
      <div className='col-lg-12'>
        <NavBarComponent />
      </div>
      <div className='product__name'>
        <h1 className='fw-bold text-center'>
          YoGano
        </h1>
      </div>
      {/** Body de imágenes */}'
      <div className='card_container'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) =>
            <div key={idx} className='card shadow-lg'>
              <div className='card_image'>
                <img src={process.env.PUBLIC_URL + `/img/Producto${el}.jpg`} alt='Imagen Yogano' />
              </div>
              <div className='card_info'>
                <span>{promocionesYogurVegano[idx].titulo}</span>
                <p>{promocionesYogurVegano[idx].description}</p>
              </div>
              <div className='comprar__item' onClick={() => {
                if (isAuthenticated) {
                  navigate('/pedidos', { preventScrollReset: true })
                } else {
                  notify('Es necesario iniciar sesión primero.', 'info')
                }
              }}>+</div>
            </div>
          )
        }
      </div>
      <div className='w-100 mt-5'>
        {/**Footer */}
        <FooterComponent />
      </div>
    </div>
  )
}

export default App
