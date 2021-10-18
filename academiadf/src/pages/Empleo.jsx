import React from 'react'
import "./Empleo.css";
import MenuHeader from "../components/MenuHeader.jsx"
import img1 from "../img/carousel/1.jpg"
import img2 from "../img/carousel/2.jpg"
import img3 from "../img/carousel/4.jpg"
import img4 from "../img/carousel/5.jpg"
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Empleo = () => {
return (
<div className="divEmpleo">
    <MenuHeader/>
    <main className="main">
        <h1>Las Reglas han cambiado, ¿Aceptas el reto?</h1>
        <Carousel className="carousel col-8">
          <Carousel.Item className="carouselItem" interval={3000}>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carouselItem" interval={3000}>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carouselItem"  interval={3000}>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carouselItem"  interval={3000}>
            <img
              className="d-block w-100"
              src={img4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
          <h3>Nosotros sí, y por ello te proponemos:</h3>
        <div className="tarjetasEmpleo col-12">
          <div className="tarjetaEmpleo col-8 col-md-5">
            <h4>Si buscas Empleo</h4>
            <p>Bolsa de empleo Servicio de orientación laboral individualizado Asesoramiento para emprendedores Talleres de búsqueda activa de empleo, motivación y simulación de entrevistas</p>
            <div className="button"><a href="https://www.empleoaqui.com/candidatos" target="_blank"> Ver ofertas de Empleo</a></div>
          </div>
          <div className="tarjetaEmpresa col-8 col-md-5">
            <h4>Si eres una Empresa</h4>
            <p>Bolsa de empleo Servicio de orientación laboral individualizado Asesoramiento para emprendedores Talleres de búsqueda activa de empleo, motivación y simulación de entrevistas</p>
            <div className="button"><a href="https://www.empleoaqui.com/empresas" target="_blank"> Encontrar Candidatos</a></div>
          </div>
        </div>
          <h3>¿Que son las agencias de colocación?</h3>
          <p>Las agencias de colocación son entidades públicas o privadas que, una vez autorizadas por los servicios públicos de empleo, realizan actividades de intermediación laboral con una doble finalidad: proporcionar a las personas trabajadoras un empleo adecuado a sus características y facilitar a los empleadores las personas trabajadoras más apropiadas a sus requerimientos y necesidades.</p>
    </main>
</div>
)
}

export default Empleo