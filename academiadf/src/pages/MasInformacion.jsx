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

    console.log(nombre+""+telefono+""+email+""+comentario+""+condicionesLegales);

    // Resetear los valores de los campos del formulario
    setNombre("");
    setTelefono("");
    setEmail("");
    setComentario("");
    setCondicionesLegales(false);

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
                    </div>
                    <div className="form-group col-12 col-md-4">
                        <label htmlFor="email">Correo:</label>
                        <input type="email" name="email" id="email" value={email} onChange={gestorEmail}/>
                    </div>
                    <div className="form-group col-12 col-md-4">
                        <label htmlFor="telefono">Telefono:</label>
                        <input type="tel" name="telefono" id="telefono" maxLength="9" value={telefono} onChange={gestorTelefono}/>
                    </div>
                    <div className="form-group comentarioMasInformacion col-12">
                        <label htmlFor="comentario">Comentario:</label>
                        <textarea name="comentario" id="comentario" value={comentario} onChange={gestorComentario}>

                        </textarea>
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
                </div>
                <button>Enviar</button>
            </form>
        </div>
    </main>
</div>
)
}

export default MasInformacion