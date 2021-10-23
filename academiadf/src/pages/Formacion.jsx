import React from 'react';
import "./Formacion.css";
import MenuHeader from '../components/MenuHeader.jsx';
import { useState, useEffect } from 'react';
// import { FaMapMarkedAlt } from "react-icons/fa";
// import { FaClock } from 'react-icons/fa';
// import { FaCalendarAlt } from 'react-icons/fa';
// import { FaFlag } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
const Formacion = () => {

// Declaramos el history para pasar los datos a la siguiente pagina segun sea la eleccion del usuario
const history = useHistory();
// Variables para la busqueda del curso
const [curso,setCurso] = useState("");
const [familiaProfesional,setFamiliaProfesional] = useState("");
const [situacionLaboral,setSituacionLaboral] = useState("");
const [busqueda,setBusqueda] = useState("");
const [arrayCursos,setArrayCursos] = useState([
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/20-35003013-docencia-de-la-formacion-profesional-para-el-empleo.png",
            nombre:"Docencia de la formacion Profesional para el empleo",
            destinatarios:"Formacion Continua",
            familiaProfesional:"Servicios SocioCulturales y a la Comunidad",
            descripcion:"¿Te gustaría ser docente? Si quieres desarrollar tu carrera profesional en el ámbito de la docencia, fórmate con nosotros, con este curso podrás transmitir los conocimientos adquiridos a lo largo de tu experiencia profesional. Además completamos tu f ...",
            direccion:"Telde - Las Huesas",
            horasLectivas:"340h",
            fInicio:"13/09/2021",
            fFinal:"22/12/2021",
            estadoMatricula:"-"
        },
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/20-35002958-desarrollo-de-soluciones-microsoft-azure.png",
            nombre:"Desarrollo de soluciones de Microsoft Azure",
            destinatarios:"SCE DESEMPLEADOS/AS",
            familiaProfesional:"INFORMÁTICA, WEB Y PROGRAMACIÓN",
            descripcion:"El servicio en la nube brinda numerosas posibilidades a las empresas tales como: creación de redes, servidores físicos, máquinas virtuales, almacenamiento, plataformas de desarrollo, etc. Es un nicho de mercado con amplia demanda de profesionales capacitados para llevar a cabo estas funciones",
            direccion:"Telde - Las Huesas",
            horasLectivas:"100h",
            fInicio:"13/09/2021",
            fFinal:"08/10/2021",
            estadoMatricula:"-"
        },
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/20-35002987-introduccion-a-las-bases-de-datos-microsoft-sql-server.png",
            nombre:"Introducción a base de datos Microsoft SQL Server",
            destinatarios:"SCE DESEMPLEADOS/AS",
            familiaProfesional:"INFORMÁTICA, WEB Y PROGRAMACIÓN",
            descripcion:"SQL es uno de los lenguajes más importantes que se debe aprender en programación, ha sido diseñado para administrar y recuperar información de sistemas de gestión de Bases de Datos. Podrás adquirir los conocimientos necesarios para la gestión de Base de Datos SQL",
            direccion:"Telde - Las Huesas",
            horasLectivas:"90h",
            fInicio:"18/10/2021",
            fFinal:"11/11/2021",
            estadoMatricula:"-"
        },
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/prl022021-prevencion-de-riesgo-laboral-en-albanileria.png",
            nombre:"Prevención de riesgo laboral en Albañilería",
            destinatarios:"TPC",
            familiaProfesional:"PREVENCIÓN Y SALUD LABORAL",
            descripcion:"El objetivo es conseguir que los trabajadores adquieran los conocimientos necesarios para identificar los riesgos laborales más frecuentes y las medidas preventivas a implantar a fin de eliminar o minimizar dichos riesgos",
            direccion:"Gáldar",
            horasLectivas:"20h",
            fInicio:"18/10/2021",
            fFinal:"21/10/2021",
            estadoMatricula:"Cerrado"
        },
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/20-35003013-docencia-de-la-formacion-profesional-para-el-empleo.png",
            nombre:"a",
            destinatarios:"Formacion Continua",
            familiaProfesional:"Servicios SocioCulturales y a la Comunidad",
            descripcion:"¿Te gustaría ser docente? Si quieres desarrollar tu carrera profesional en el ámbito de la docencia, fórmate con nosotros, con este curso podrás transmitir los conocimientos adquiridos a lo largo de tu experiencia profesional. Además completamos tu f ...",
            direccion:"Telde - Las Huesas",
            horasLectivas:"340h",
            fInicio:"13/09/2021",
            fFinal:"22/12/2021",
            estadoMatricula:"-"
        }
]);

// Gestores del formulario

const gestorNombreCurso = (e) =>{
    setCurso(e.target.value);
}

const gestorFamiliaProfesional = (e) =>{
    setCurso(e.target.value);
}

const gestorSituacionLaboral = (e) =>{
    setCurso(e.target.value);
}

    const buscarCurso = (e) =>{
        e.preventDefault();

        if(curso !=="" || familiaProfesional!=="" || situacionLaboral!=="" ){
           if(curso!==""){
               arrayCursos.forEach(e=>{
                if(e.nombre === curso){
                    setArrayCursos(e);
                }
               });
               console.log(busqueda);
           }
        }
    }
    // UseEffect para actualizar segun la busqueda
    useEffect(()=>{},[arrayCursos]);
    // const meInteresa = (curso) =>{
    //     const cursoInteres = curso;
    //     // history.push({pathname:"/informacionCurso", state:{curso:{cursoInteres}}});
    //     // console.log("Hola");
    // };
    return (
            <div className="divFormacion">
                <MenuHeader />
                    <main className="main2">
                    <div className="menuFormacion col-12">
                        <form action="" onSubmit={buscarCurso}>
                            <div className="form-group col-4">
                                <label htmlFor="nombreCurso">Nombre del Curso:</label>
                                <input type="text" name="nombreCurso" id="nombreCurso" onChange={gestorNombreCurso} value={curso} />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="familiaProfesional">Familia Profesional:</label>
                                <select name="familiaProfesional" id="familiaProfesional" onChange={gestorFamiliaProfesional}>
                                    {arrayCursos.map(curso=>{
                                        return <option value={curso.familiaProfesional}>{curso.familiaProfesional}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="situacionLaboral">Situación Laboral:</label>
                                <select name="situacionLaboral" id="situacionLaboral" onChange={gestorSituacionLaboral}>
                                {arrayCursos.map(curso=>{
                                        return <option value={curso.destinatarios}>{curso.destinatarios}</option>
                                    })}
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="cursos">
                        {arrayCursos.map(curso => {
                        return(
                        <div className="contenedor_tarjeta col-9 col-sm-9 col-md-4">
                                <figure id="tarjeta">
                                <img src={curso.imagenCurso} className="frontal" alt="Logo del Curso"></img>
                                    <figcaption className="trasera">
                                    {/* <h2 class="titulo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, vero!</h2>
                                    <hr/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cupiditate voluptates ipsum suscipit, aspernatur eum, amet nemo architecto nihil corrupti.</p> */}
                                    </figcaption>
                                </figure>
                            </div>
                            )
                            })}
                    </div>
                </main>
            </div>
     )
    };           
   
    
export default Formacion