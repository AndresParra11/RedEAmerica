
import '../../pages/Home/Home.css';
const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container grid container">
                <div className="footer__content">
                    <p className='logo'>RedEAmerica</p>
                    <p className="footer__description">Construimos puentes hacia el futuro tech,  donde la <strong>igualdad</strong> y la <strong>innovación</strong> <br />  caminan juntas</p>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Nosotros</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Nuestra historia</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Nuestro Equipo</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Valores</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Nuestros Servicios</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Makaia</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">No se cual mas</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Otro aqui</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Nuestra Compañia</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Lineas Estratégicas</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Contacto</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Donaciones</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;