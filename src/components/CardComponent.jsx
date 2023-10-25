import React from 'react'
import '../styles/HomeStyles.css'
function CardComponent() {
    const imagesIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            {
                imagesIndexes.map((el, idx) => (
                    <div className='card' key={idx}>
                        <div className="card__image">
                            <img src={process.env.PUBLIC_URL + `/img/Producto${el}.jpg`} alt="Yogur YOGANO" />
                        </div>
                        <div className="card__info">
                            <span>Descripción beneficios</span>
                            <p>
                                Listado de beneficios
                            </p>
                        </div>
                        <button className='btn btn-primary' onClick={() => alert("Mostrará modal con descripción")}>Conocer más</button>
                    </div>
                ))
            }
        </>
    )
}

export default CardComponent