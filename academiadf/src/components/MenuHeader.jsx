import React from 'react'
import "./MenuHeader.css";
const MenuHeader = () => {
    // comentario
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
                        <a href="/sobrenosotros" className="sobreNosotros">
                            Sobre Nosotros
                        </a>
                        <div class="dropdown">
                            <div>
                                <a href="/contacto">Contacto</a>
                            </div>
                        </div>
                    </div>
                    <a href="/acceder">Acceder</a>
                </nav>
            </div>   
        </div>
    )
}

export default MenuHeader
