import React from 'react'
import MenuHeader from '../components/MenuHeader';
import "./Contacto.css";
const Contacto = () => {
    return (
        <div className="divContacto">
            <MenuHeader/>  
            <main className="main">
                <h1>Contacto</h1>
                <p>En GRUPO ADF estamos para ayudarte en lo que necesites. Puedes ponerte en contacto con nosotros o acercarte por nuestras oficinas situadas en las siguientes direcciones:</p>
                <div className="tarjetasContacto">
                    <div className="tarjetaDireccion">
                        <div className="imagenTarjeta1"></div>
                        <h4>ADF Gáldar</h4>
                        <div className="direccion"></div>
                        <div className="tarjetaInfo">
                            <p><span>Tfno:</span>928880986</p>
                            <p><span>Whatsapp:</span>928880986</p>
                            <p><span>Email:</span>galdar@academiadf.com</p>
                        </div>
                    </div>
                    <div className="tarjetaDireccion">
                        <div className="imagenTarjeta2"></div>
                        <h4>CIFE Telde - Las Huesas</h4>
                        <div className="direccion"></div>
                        <div className="tarjetaInfo">
                            <p><span>Tfno:</span>828026302</p>
                            <p><span>Whatsapp:</span>693819934</p>
                            <p><span>Email:</span>telde@academiadf.com</p>  
                        </div>
                    </div>
                    <div className="tarjetaDireccion">
                        <div className="imagenTarjeta3"></div>
                        <h4>Formavanza Tamaraceite</h4>
                        <div className="direccion"></div>
                        <div className="tarjetaInfo">
                            <p><span>Tfno:</span>928170744</p>
                            <p><span>Whatsapp:</span>605291392</p>
                            <p><span>Email:</span>tamaraceite@academiadf.com</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contacto
