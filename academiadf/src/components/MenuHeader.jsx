import React from 'react'
import "./MenuHeader.css";
const MenuHeader = () => {
    return (
        <div className="divHeader">
            <div className="divLogo">
                <div className="logo"></div>
            </div>
            <div className="divNavbar">
                <nav className="navbar">
                    <a href="/incio">Inicio</a>
                    <a href="/formacion">Formación</a>
                    <a href="/empleo">Empleo</a>
                    <div className="sobreNosotrosDropDown">
                        <button className="sobreNosotros">
                            Sobre Nosotros
                        </button>
                        <div class="dropdown">
                        <a href="/contacto">Contacto</a>
                        </div>
                    </div>
                    <a href="/acceder">Acceder</a>
                </nav>
            </div>    
        </div>
    )
}

export default MenuHeader
