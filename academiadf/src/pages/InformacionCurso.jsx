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
    <MenuHeader />
    <main className="main">
        <div className="tablaInformacionCurso">
            <h1>{cursoInteres.nombre}</h1>
            <table className="tablaInfo">
                <tbody>
                    <tr>
                        <th scope="row" className="headerTabla">Área</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.familiaProfesional}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Centro</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.direccion}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Nombre del Curso</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.nombre}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Fecha de Inicio</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.fInicio}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Fecha de Fin</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.fFinal}</p>
                        </td>
                    </tr>
                    <tr>

                        <th scope="row" className="headerTabla">Tipo de Curso</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.destinatarios}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Horas</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.horasLectivas}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Presentacion</th>
                        <td className="cuerpoTabla">
                            <p className="descripcionCurso">{cursoInteres.descripcion}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="botonesInfo">
                <div className="separacionHeader"></div>
                <div className="botones">
                    <button onClick={()=>{}}>Preinscribirme</button>
                    <button onClick={()=>{}}>Más Información</button>
                </div>
            </div>
        </div>
    </main>
</div>
)
}

export default InformacionCurso