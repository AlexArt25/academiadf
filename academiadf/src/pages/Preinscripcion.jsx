import React from 'react'
import { useLocation} from 'react-router';
import MenuHeader from '../components/MenuHeader';
import { useState } from 'react';
import "./Preinscripcion.css";
const Preinscripcion = () => {
    // UseLocation para acceder a los parametros que le pasamos con el history.push desde el otro componente
    const location = useLocation();
    // Obtenemos los datos del curso
    const nombreCurso =location.state.curso.nombreCurso;

    // Variables de los campos del formulario
    const [nombre,setNombre] = useState("");
    const [primerApellido,setPrimerApellido] = useState("");
    const [segundoApellido,setSegundoApellido] = useState("");
    const [fechaNacimiento,setFechaNacimiento] = useState("");
    const [pais,setPais] = useState("");
    const [provincia,setProvincia] = useState("");
    const [municipio,setMunicipio] = useState("");
    const [dni,setDni] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");
    const [nivelAcademico,setNivelAcademico] = useState("");
    const [especialidad,setEspecialidad] = useState("");
    const [situacionLaboral,setSituacionLaboral] = useState("");
    const [formaDeAcceso, setFormaDeAcceso] = useState("");
    const [medioConocimiento, setMedioConocimiento] = useState("");
    const [condicionesLegales,setCondicionesLegales] = useState(false);

    // Gestores de los campos del formulario

    const gestorNombre = (e) =>{
        setNombre(e.target.value);
    }

    const gestorPrimerApellido = (e) =>{
        setPrimerApellido(e.target.value);
    }

    const gestorSegundoApellido = (e) =>{
        setSegundoApellido(e.target.value);
    }

    const gestorFechaNacimiento = (e) =>{
        setFechaNacimiento(e.target.value);
    }

    const gestorPais = (e) =>{
        setPais(e.target.value);
    }

    const gestorProvincia = (e) =>{
        setProvincia(e.target.value);
    }

    const gestorMunicipio = (e) =>{
        setMunicipio(e.target.value);
    }

    const gestorDni = (e) =>{
        setDni(e.target.value);
    }

    const gestorTelefono = (e) =>{
        setTelefono(e.target.value);
    }

    const gestorEmail = (e) =>{
        setEmail(e.target.value);
    }

    const gestorNivelAcademico = (e) =>{
        setNivelAcademico(e.target.value);
    }

    const gestorEspecialidad = (e) =>{
        setEspecialidad(e.target.value);
    }

    const gestorSituacionLaboral = (e) =>{
        setSituacionLaboral(e.target.value);
    }

    const gestorFormaAcceso = (e) =>{
        setFormaDeAcceso(e.target.value);
    }

    const gestorMedioConocimiento = (e) =>{
        setMedioConocimiento(e.target.value);
    }

    const gestorCondicionesLegales = (e) =>{
        if(condicionesLegales !== true){
            setCondicionesLegales(true);
        }else{
            setCondicionesLegales(false);
        }
    }

    // Funcion de gestion del formulario al darle a enviar
    
    const submit = (e)=>{
        e.preventDefault();

        console.log(nombre+""+primerApellido+""+segundoApellido+""+fechaNacimiento+""+pais+""+provincia+""+municipio+""+dni+""+telefono+""+email+""+nivelAcademico+""+especialidad+""+situacionLaboral+""+formaDeAcceso+""+medioConocimiento+""+condicionesLegales);

        // Resetear los valores de los campos del formulario
        setNombre("");
        setPrimerApellido("");
        setSegundoApellido("");
        setFechaNacimiento("");
        setPais("");
        setProvincia("");
        setMunicipio("");
        setDni("");
        setTelefono("");
        setEmail("");
        setNivelAcademico("");
        setEspecialidad("");
        setSituacionLaboral("");
        setFormaDeAcceso("");
        setMedioConocimiento("");
        setCondicionesLegales(false);

    }
    return (
        <div className="divPreinscripcionCurso">
            <MenuHeader/>
            <main className="main">
                <h1>Preinscripcion</h1>
                <h3>{nombreCurso}</h3>
                <div className="formularioPreinscripcion">
                    <form action="" onSubmit={submit}>
                        <div className="headerPreinscripcion col-12">
                            <h3>Datos Personales</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" name="nombre" id="nombre" value={nombre} onChange={gestorNombre}/>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="primerApellido">Primer Apellido:</label>
                                <input type="text" name="primerApellido" id="primerApellido" value={primerApellido} onChange={gestorPrimerApellido}/>
                            </div>
                            <div className="form-group col-12 col-md-6"> 
                                <label htmlFor="segundoApellido">Segundo Apellido:</label>
                                <input type="text" name="segundoApellido" id="segundoApellido" value={segundoApellido} onChange={gestorSegundoApellido}/>
                            </div>
                            <div className="form-group col-12 col-md-6"> 
                                <label htmlFor="fechaNacimiento">Fecha Nacimiento:</label>
                                <input type="date" name="fechaNacimiento" id="fechaNacimiento" value={fechaNacimiento} onChange={gestorFechaNacimiento}/>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="pais">Pais:</label>
                                <input type="text" name="pais" id="pais" value={pais} onChange={gestorPais}/>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="provincia">Provincia:</label>
                                <input type="text" name="provincia" id="provincia" value={provincia} onChange={gestorProvincia}/>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="municipio">Municipio:</label>
                                <input type="text" name="municipio" id="municipio" value={municipio} onChange={gestorMunicipio}/>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="dni">D.N.I o N.I.E:</label>
                                <input type="text" name="dni" id="dni" value={dni} onChange={gestorDni}/>  
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Datos Contacto</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="telefono">Telefono:</label>
                                <input type="tel" name="telefono" id="telefono" maxLength="9" value={telefono} onChange={gestorTelefono}/>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="email">Correo:</label>
                                <input type="email" name="email" id="email" value={email} onChange={gestorEmail}/> 
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Situacion Laboral</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="nivelAcademico">Nivel Academico:</label>
                                <select name="nivelAcademico" id="nivelAcademico" value={nivelAcademico} onChange={gestorNivelAcademico}>

                                </select>
                            </div>
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="especialidad">Especialidad:</label>
                                <select name="especialidad" id="especialidad" value={especialidad} onChange={gestorEspecialidad}>

                                </select>
                            </div>
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="situacionLaboral">Situacion Laboral:</label>
                                <select name="situacionLaboral" id="situacionLaboral" value={situacionLaboral} onChange={gestorSituacionLaboral}>

                                </select>
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Otros Datos</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="formaDeAcceso">¿Como nos has Conocido?</label>
                                <select name="formaDeAcceso" id="formaDeAcceso" value={formaDeAcceso} onChange={gestorFormaAcceso}>

                                </select>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="medioConocimiento">Otro Medio:</label>
                                <input type="text" name="medioConocimiento" id="medioConocimento" value={medioConocimiento} onChange={gestorMedioConocimiento}/>
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Condiciones Legales</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12">
                            <input type="checkbox" className="col-1" name="condicionesLegales" id="condicionesLegales" onChange={gestorCondicionesLegales}/>
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