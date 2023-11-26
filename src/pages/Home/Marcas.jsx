//import React from 'react';
import marcaEjemplo from '../../assets/Img/brand-1.png';

const Marcas = () => {
    return (
        <section className="brand section container">
            <h3 className="brand__title">Nuestros Aliados</h3>
            <div className="brand__container grid">
                <img src={marcaEjemplo} alt="" />
                <img src={marcaEjemplo} alt="" />
                <img src={marcaEjemplo} alt="" />
                <img src={marcaEjemplo} alt="" />
                <img src={marcaEjemplo} alt="" />
                <img src={marcaEjemplo} alt="" />
            </div>

            <span className="brand__button">Ver todoos nuestros Aliados
                <i className="uil uil-arrow-right brand__button-icon"></i>
            </span>
        </section>
    )
}

export default Marcas;