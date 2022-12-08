import React from "react";

const Promo = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                <img src="../img/1.jpg" className="img-fluid" alt="Reserva"/>
                </div>
                <div className="col-md-6 p-5 align-items-center">
                    <h2>Haz tu reserva</h2>
                    <p>Disfruta de la experiencia única de Hamburguesa Nostra. Reserva tu mesa de forma fácil y rápida en tu restaurante favorito.</p>
                    <a href="https://www.hamburguesanostra.com/restaurantes/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Reserva</a>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6 p-5">
                    <h2>Haz tu reserva</h2>
                    <p>Disfruta de la experiencia única de Hamburguesa Nostra. Reserva tu mesa de forma fácil y rápida en tu restaurante favorito.</p>
                    <a href="https://www.hamburguesanostra.com/novedades/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Saber más</a>
                </div>
                <div className="col-md-6">
                    <img src="../img/2.jpg" className="img-fluid" alt="Saber más"/>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src="../img/3.jpg" className="img-fluid" alt="Ver más"/>
                </div>
                <div className="col-md-6 p-5">
                    <h2>Haz tu reserva</h2>
                    <p>Disfruta de la experiencia única de Hamburguesa Nostra. Reserva tu mesa de forma fácil y rápida en tu restaurante favorito.</p>
                    <a href="https://www.hamburguesanostra.com/restaurantes/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ver más</a>
                </div>
            </div>
        </div>
    )
}

export default Promo;