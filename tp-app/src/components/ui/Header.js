import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = () => {

    const history = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxfcIzppBjpjMAivbo_Ypw_tDajrKM81GXw&usqp=CAU" alt="logo_emp" width="120" height="40"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                                            onClick={() => history(-1)}>Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                                        to="/intentos">Estadísticas de uso</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}