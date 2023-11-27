//import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="home" id="home">
            <div className="home__container container">
                <div className="home__data">
                    <h3 className="home__subtitle">Aprende y Transforma</h3>
                    <h1 className="home__title">RedEAmerica</h1>
                    <p className="home__description">No solo enseñamos líneas de código, ¡creamos líneas de cambio! Bienvenidos a la revolución tech inclusiva.</p>
                    <Link to="/register" className="button button__header unit">¡Unete a RedEAmerica!</Link>
                </div>
            </div>
        </section>
    )
}

export default Header;