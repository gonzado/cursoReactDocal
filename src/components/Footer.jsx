import React from "react";

const Footer = () => {
    return (
        <div className="container text-center mt-5">
            <div className="row justify-content-around">
                <div>
                    <h3>TE ESPERAMOS CON LA AUTÉNTICA HAMBURGUESA DE MERCADO</h3>
                </div>
                <div className="d-flex justify-content-center">
                    <a className="p-1" href="https://www.facebook.com/hamburguesanostra"><img src="../img/facebook.svg" alt="Facebook" /></a>
                    <a className="p-1" href="https://twitter.com/hamburguesanost"><img src="../img/twitter.svg" alt="Twitter" /></a>
                    <a className="p-1" href="https://www.instagram.com/hamburguesanostra"><img src="../img/instagram.svg" alt="Instagram" /></a>
                </div>
                <div className="row">
                <ul className="d-flex justify-content-center">
                    <li className="nav-item p-4">
                        <a className="nav-link" href="https://www.hamburguesanostra.com/aviso-legal">Aviso legal</a>
                    </li>
                    <li className="nav-item p-4">
                        <a className="nav-link" href="https://www.hamburguesanostra.com/politica-de-privacidad">Politica de privacidad</a>
                    </li>
                    <li className="nav-item p-4">
                        <a className="nav-link" href="https://www.hamburguesanostra.com/politica-de-cookies">Política de cookies</a>
                    </li>
                    <li className="nav-item p-4">
                        <a className="nav-link" href="https://www.hamburguesanostra.com/franquicias">Franquicias</a>
                    </li>
                    <li className="p-4">
                        <a className="nav-link" href="https://www.hamburguesanostra.com/sites/default/files/pdfs/alergenos.pdf">Alérgenos</a>
                    </li>
                    <li className="p-4">
                        <a className="nav-link" href="https://www.hamburguesanostra.com/contacto">Contacto</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;