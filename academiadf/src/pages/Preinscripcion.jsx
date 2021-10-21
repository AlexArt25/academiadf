import React from 'react'
import { useLocation} from 'react-router';
import MenuHeader from '../components/MenuHeader';
import "./Preinscripcion.css";
const Preinscripcion = () => {
    // UseLocation para acceder a los parametros que le pasamos con el history.push desde el otro componente
    const location = useLocation();
    // Obtenemos los datos del curso
    const nombreCurso =location.state.curso.nombreCurso;
    console.log(nombreCurso);
    return (
        <div className="divPreinscripcionCurso">
            <MenuHeader/>
            <main className="main">
                <h1>Preinscripcion</h1>
                <h3>{nombreCurso}</h3>
                <div className="formularioPreinscripcion">
                    <form action="" onSubmit="">
                        <div className="headerPreinscripcion col-12">
                            <h3>Datos Personales</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" name="nombre" id="nombre" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="primerApellido">Primer Apellido:</label>
                                <input type="text" name="primerApellido" id="primerApellido" />
                            </div>
                            <div className="form-group col-12 col-md-6"> 
                                <label htmlFor="segundoApellido">Segundo Apellido:</label>
                                <input type="text" name="segundoApellido" id="segundoApellido" />
                            </div>
                            <div className="form-group col-12 col-md-6"> 
                                <label htmlFor="fechaNacimiento">Fecha Nacimiento:</label>
                                <input type="date" name="fechaNacimiento" id="fechaNacimiento" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="pais">Pais:</label>
                                <input type="text" name="pais" id="pais" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="provincia">Provincia:</label>
                                <input type="text" name="provincia" id="provincia" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="municipio">Municipio:</label>
                                <input type="text" name="municipio" id="municipio" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="dni">D.N.I o N.I.E:</label>
                                <input type="text" name="dni" id="dni" />  
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Datos Contacto</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="telefono">Telefono:</label>
                                <input type="tel" name="telefono" id="telefono" maxLength="9" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="email">Correo:</label>
                                <input type="email" name="email" id="email"/> 
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Situacion Laboral</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="nivelAcademico">Nivel Academico:</label>
                                <select name="nivelAcademico" id="nivelAcademico">

                                </select>
                            </div>
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="especialidad">Especialidad:</label>
                                <select name="especialidad" id="especialidad">

                                </select>
                            </div>
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="situacionLaboral">Situacion Laboral:</label>
                                <select name="situacionLaboral" id="situacionLaboral">

                                </select>
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Otros Datos</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="formaDeAcceso">¿Como nos has Conocido?</label>
                                <select name="formaDeAcceso" id="formaDeAcceso">

                                </select>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="medioConocimiento">Otro Medio:</label>
                                <input type="text" name="medioConocimiento" id="medioConocimento" />
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Condiciones Legales</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12">
                            <input type="checkbox" className="col-1" name="condicionesLegales" id="condicionesLegales"/>
                            <p className="col-10">He leido y acepto las <a href="https://www.academiadf.com/adfv2012/ADF_Politica.aspx">Condiciones Legales</a></p>
                            </div>
                        </div>
                        <button>Preinscribirte</button>
                    </form>
                </div>   
            </main>
        </div>
    )
}

export default Preinscripcion
