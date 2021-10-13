import React from 'react'
import "./Inicio.css";
import MenuHeader from '../components/MenuHeader';
const Inicio = () => {
    const arrayCursos = [
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
            nombre:"DESARROLLO DE SOLUCIONES MICROSOFT AZURE",
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
            nombre:"INTRODUCCIÓN A LAS BASES DE DATOS MICROSOFT SQL SERVER",
            destinatarios:"SCE DESEMPLEADOS/AS",
            familiaProfesional:"INFORMÁTICA, WEB Y PROGRAMACIÓN",
            descripcion:"SQL es uno de los lenguajes más importantes que se debe aprender en programación, ha sido diseñado para administrar y recuperar información de sistemas de gestión de Bases de Datos. Podrás adquirir los conocimientos necesarios para la gestión de Base de Datos SQL",
            horasLectivas:"90h",
            fInicio:"18/10/2021",
            fFinal:"11/11/2021",
            estadoMatricula:"-"
        },
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/prl022021-prevencion-de-riesgo-laboral-en-albanileria.png",
            nombre:"PREVENCIÓN DE RIESGO LABORAL EN ALBAÑILERIA",
            destinatarios:"TPC",
            familiaProfesional:"PREVENCIÓN Y SALUD LABORAL",
            descripcion:"El objetivo es conseguir que los trabajadores adquieran los conocimientos necesarios para identificar los riesgos laborales más frecuentes y las medidas preventivas a implantar a fin de eliminar o minimizar dichos riesgos",
            direccion:"Gáldar",
            horasLectivas:"20h",
            fInicio:"18/10/2021",
            fFinal:"21/10/2021",
            estadoMatricula:"Cerrado"
        }
    ];
    return (
        <div className="divInicio">
            <MenuHeader/>
            <main className="main">
                {arrayCursos.map(curso=>{
                    return(
                        <div className="tarjetaCurso">
                            <div className="imagenCurso">
                                <img src={curso.imagenCurso}></img>
                            </div>
                            <div className="cuerpoTarjetaCurso">
                                <div className="descripcionCurso">
                                    <h2 className="nombreCurso">{curso.nombre}</h2>
                                    <h4 className="subtituloCurso">{curso.destinatarios}/{curso.familiaProfesional}</h4>
                                    <p>{curso.descripcion}</p>
                                </div>
                                <div className="datosCurso">
                                    <p>{curso.direccion}</p>
                                    <p>{curso.horasLectivas}</p>
                                    <p>{curso.fInicio}</p>
                                    <p>{curso.fFinal}</p>
                                </div>
                                <div className="botonMasInfo">
                                    <button>Me Interesa</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </main>   
        </div>
    )
}

export default Inicio
