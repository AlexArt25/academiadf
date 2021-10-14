import React from 'react'
import "./InformacionCurso.css"
import { useLocation } from 'react-router';
import MenuHeader from '../components/MenuHeader';
const InformacionCurso = (props) => {
    // UseLocation para acceder a los parametros que le pasamos con el history.push desde el otro componente
    const location = useLocation();
    // Obtenemos los datos del curso
    const cursoInteres =location.state.curso.cursoInteres;
    console.log(cursoInteres);
    return (
        <div className="divInformacionCurso">
         <MenuHeader/>
            <main className="main">
                
            </main>   
        </div>
    )
}

export default InformacionCurso
