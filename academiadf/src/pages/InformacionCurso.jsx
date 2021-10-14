import React from 'react'
import "./InformacionCurso.css"
import { useLocation } from 'react-router';
import MenuHeader from '../components/MenuHeader';
const InformacionCurso = (props) => {
    // UseLocation para acceder a los parametros que le pasamos con el history.push desde el otro componente
    const location = useLocation();
    // Obtenemos los datos del curso
    const cursoInteres =location.state.curso.cursoInteres;
    console.log(typeof cursoInteres);
    return (
        <div className="divInformacionCurso">
         <MenuHeader/>
            <main className="main">
               <div className="tablaInformacionCurso">
                   <h1>{cursoInteres.nombre}</h1>
                    <div className="tablaInfo">
                        <div className="headerTabla">
                            <p>Área</p>
                            <p>Centro</p>
                            <p>Nombre del Curso</p>
                            <p>Fecha de Inicio</p>
                            <p>Fecha de Fin</p>
                            <p>Tipo de Curso</p>
                            <p>Horas</p>
                            <p>Presentacion</p>
                        </div>
                        <div className="cuerpoTabla">
                        <p>{cursoInteres.familiaProfesional}</p>
                        <p>{cursoInteres.direccion}</p>
                        <p>{cursoInteres.nombre}</p>
                        <p>{cursoInteres.fInicio}</p>
                        <p>{cursoInteres.fFinal}</p>
                        <p>{cursoInteres.destinatarios}</p>
                        <p>{cursoInteres.horasLectivas}</p>
                        <p className="descripcionCurso">{cursoInteres.descripcion}</p>
                        </div>
                    </div>
                    <div className="botonesInfo">
                        <div className="separacionHeader"></div>
                        <div className="botones">
                            <button>Preinscribirme</button>
                            <button>Más Información</button>
                        </div>
                    </div>
               </div>
            </main>   
        </div>
    )
}

export default InformacionCurso
