// eslint-disable-next-line no-unused-vars
import React from 'react'
import about from '../../assets/Img/about.jpg'
import { FaCheck } from 'react-icons/fa';


const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__countainer grid container">
        <div className="about__group">
          <div className="about__thumb">
            <img src={about} className="about__thumb-img" />
          </div>
          <div className="about__banner">
          </div>
        </div>
        <div className="about__data">
          <h2 className="section__title about__title">Consigue tus objetivos con   <br /> <span className='logo__two'>RedEAmerica</span> </h2>
          <p className="about__description">
          En nuestro viaje hacia la transformación digital, reconocemos que cerrar la brecha digital es más que un paso; es un compromiso con la inclusión social y la igualdad de oportunidades. En el corazón de nuestra misión está la convicción de que la verdadera revolución no solo radica en proporcionar acceso a la tecnología, sino en capacitar a cada individuo para que se apropie de ella..
          </p>
          <div className="about__details">
            <p className="about__details-description">
            <FaCheck />
              Mejora tu organización
            </p>
            <p className="about__details-description">
              <FaCheck />
              Acceda a gran variedad cursos en línea
              </p>
            <p className="about__details-description">
              <FaCheck />
              Aprenda las habilidades tecnológicas del mercado            </p>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default About;