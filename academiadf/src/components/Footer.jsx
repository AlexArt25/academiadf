import React from 'react'
import "./Footer.css"
import sce from "../img/sce.gif"
import fse1 from "../img/fse1.png"
import fse2 from "../img/fse2.png"
import img012 from "../img/012.gif"
import sepe from "../img/meyss.png"


const Footer = () => {
    return (
        <div className="divFooter">
            <div className="colaboradores col-12 col-md-4">
                <div className="imgColaboradores">
                    <a href="http://www3.gobiernodecanarias.org/empleo/portal/web/sce">
                        <img src={sce} alt="SCE"/>
                    </a>
                    <a href="https://ec.europa.eu/esf/home.jsp?langId=es">
                        <img src={fse2} alt="FSE"/>
                    </a>
                    <a href="https://ec.europa.eu/esf/home.jsp?langId=es">
                        <img src={fse1} alt="FSE"/>
                    </a>
                    <a id="img012" href="https://www3.gobiernodecanarias.org/empleo/portal/web/sce">
                        <img src={img012} alt="012"/>
                    </a>
                    <a id="sepe" href="https://sede.sepe.gob.es/portalSede/es/">
                        <img src={sepe} alt="SEPE"/>
                    </a>
                </div>
            </div>
            <div className="empresa col-12 col-md-4">
                <div className="imgEmpresa">
                    <a href="https://www.empleoaqui.com/inicio"></a>
                    <a href="https://www.estudiaencasa.es/"></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
            <div className="newsLetter col-12 col-md-4">
                <div className="divNewsLetter">

                </div>
            </div>
        </div>
    )
}

export default Footer
