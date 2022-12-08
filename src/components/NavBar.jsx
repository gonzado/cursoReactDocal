import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
<div className="container">
    <div className="row">
        <div className="col-md-11">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand " href="https://www.hamburguesanostra.com/"><img src="img/LogoPNGNegroBueno.png" alt="Logo Empresa" width="125, 57"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Filosofía</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Carta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Novedades</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Restaurantes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Take Away</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
            <div className="col-md-1 d-flex align-items-center justify-content-end">
            <CartWidget/>
        </div>
    </div>
</div>
    )
}

export default NavBar;