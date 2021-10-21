import React from 'react'
import "./MasInformacion.css";
import MenuHeader from '../components/MenuHeader';
import { useLocation} from 'react-router';
import { useState } from 'react';
const MasInformacion = () => {
// UseLocation para acceder a los parametros que le pasamos con el history.push desde el otro componente
const location = useLocation();
// Obtenemos los datos del curso
const nombreCurso =location.state.curso.nombreCurso;

// Variables para guardar los campos del formulario
const [nombre,setNombre] = useState("");
const [telefono,setTelefono] = useState("");
const [email,setEmail] = useState("");
const [comentario,setComentario] = useState("");
const [condicionesLegales,setCondicionesLegales] = useState(false);
const [error,setError] = useState({
    errorNombre:"",
   errorTelefono:"",
  errorEmail:"",
  errorComentario:"",
 errorCondicionesLegales:""
});

// Gestores de los campos del formulario

const gestorNombre = (e) =>{
    setNombre(e.target.value);
}
const gestorTelefono = (e) =>{
    setTelefono(e.target.value);
}

const gestorEmail = (e) =>{
    setEmail(e.target.value);
}

const gestorComentario = (e) =>{
    setComentario(e.target.value);
}

const gestorCondicionesLegales = (e) =>{
    if(condicionesLegales !== true){
        setCondicionesLegales(true);
    }else{
        setCondicionesLegales(false);
    }
}

const submit = (e)=>{
    e.preventDefault();

    if(nombre.length <=0 || !isNaN(nombre)){
        error.errorNombre="*";
    }
    if(isNaN(telefono) || telefono.length>9 || telefono.length<9 || telefono === ""){
        error.errorTelefono="*";
    }
    if(email===""){
        error.errorEmail="";
    }
    if(comentario===""){
        error.errorComentario="*";
    }
    if(condicionesLegales === false){
        error.errorCondicionesLegales="*";
    }
    if(error.errorNombre==="" && error.errorTelefono==="" && error.errorEmail==="" && error.errorComentario==="" && error.errorCondicionesLegales===""){
        console.log("Mensaje Enviado");
    }
    // Resetear los valores de los campos del formulario
    setNombre("");
    setTelefono("");
    setEmail("");
    setComentario("");
    setCondicionesLegales(false);
    error.errorNombre="";
    error.errorTelefono="";
    error.errorEmail="";
    error.errorMensaje="";
    error.errorCondicionesLegales="";
    console.log(error.errorNombre);
}

return (
<div className="divPreinscripcionCurso">
    <MenuHeader />
    <main className="main">
        <h1>Más Información</h1>
        <h3>{nombreCurso}</h3>
        <div className="formularioMasInformacion">
            <form action="" onSubmit={submit}>

                <div className="headerMasInformacion col-12">
                    <h3>Datos Personales</h3>
                </div>
                <div className="datosMasInformacion">
                    <div className="form-group col-12 col-md-4">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" value={nombre} onChange={gestorNombre}/>
                        <span className="error">{error.errorNombre}</span>
                    </div>
                    <div className="form-group col-12 col-md-4">
                        <label htmlFor="email">Correo:</label>
                        <input type="email" name="email" id="email" value={email} onChange={gestorEmail}/>
                        <span className="error">{error.errorEmail}</span>
                    </div>
                    <div className="form-group col-12 col-md-4">
                        <label htmlFor="telefono">Telefono:</label>
                        <input type="tel" name="telefono" id="telefono" maxLength="9" value={telefono} onChange={gestorTelefono}/>
                        <span className="error">{error.errorTelefono}</span>
                    </div>
                    <div className="form-group comentarioMasInformacion col-12">
                        <label htmlFor="comentario">Comentario:</label>
                        <textarea name="comentario" id="comentario" value={comentario} onChange={gestorComentario}>

                        </textarea>
                        <span className="error">{error.errorMensaje}</span>
                    </div>
                    <div className="headerMasInformacion col-12">
                            <h3>Condiciones Legales</h3>
                        </div>
                        <div className="datosMasInformacion condicionesLegales">
                            <div className="form-group">
                            <input type="checkbox" name="condicionesLegales" id="condicionesLegales" onChange={gestorCondicionesLegales}/>
                            <p>He leido y acepto las <a href="https://www.academiadf.com/adfv2012/ADF_Politica.aspx">Condiciones Legales</a></p>
                            <span className="error">{error.errorCondicionesLegales}</span>
                            </div>
                        </div>
                </div>
                <button>Enviar</button>
            </form>
            {error.errorNombre};
        </div>
    </main>
</div>
)
}

export default MasInformacion