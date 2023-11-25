//import React from 'react';
import persona from '../../assets/Img/teacher-1.jpg'

const PeopleSection = () => {
    return (
        <section className="teachers section" id="teachers">
            <h2 className="section__title">Nuestro equipo <br /> Valioso</h2>
            <p className="section__subtitle">
                En equipo logramos mucho más.</p>
            <div className="teachers__container grid container">
                <div className="teacher__item">
                    <div className="teacher__img-box">
                        <img src={persona} alt="" />
                    </div>
                    <div>
                    <h3 className="teacher__title">Carlos Gonzales,</h3>
                    <p>Directoro Ejecutivo</p>
                    </div>
                    <div className="teacher__social">
                        <a href="https://www.facebook.com/" className="teacher__social-link">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" className="teacher__social-link">
                            <i className="uil uil-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/" className="teacher__social-link">
                            <i className="uil uil-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="teacher__item">
                    <div className="teacher__img-box">
                        <img src={persona} alt="" />
                    </div>
                    <h3 className="teacher__title">Kelly Franklin,</h3>
                    <span>Designer</span>
                    <div className="teacher__social">
                        <a href="https://www.facebook.com/" className="teacher__social-link">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" className="teacher__social-link">
                            <i className="uil uil-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/" className="teacher__social-link">
                            <i className="uil uil-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="teacher__item">
                    <div className="teacher__img-box">
                        <img src={persona} alt="" />
                    </div>
                    <h3 className="teacher__title">Kelly Franklin,</h3>
                    <span>Designer</span>
                    <div className="teacher__social">
                        <a href="https://www.facebook.com/" className="teacher__social-link">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" className="teacher__social-link">
                            <i className="uil uil-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/" className="teacher__social-link">
                            <i className="uil uil-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="teacher__item">
                    <div className="teacher__img-box">
                        <img src={persona} alt="" />
                    </div>
                    <h3 className="teacher__title">Kelly Franklin,</h3>
                    <span>Designer</span>
                    <div className="teacher__social">
                        <a href="https://www.facebook.com/" className="teacher__social-link">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" className="teacher__social-link">
                            <i className="uil uil-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/" className="teacher__social-link">
                            <i className="uil uil-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="teacher__item">
                    <div className="teacher__img-box">
                        <img src={persona} alt="" />
                    </div>
                    <h3 className="teacher__title">Kelly Franklin,</h3>
                    <span>Designer</span>
                    <div className="teacher__social">
                        <a href="https://www.facebook.com/" className="teacher__social-link">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" className="teacher__social-link">
                            <i className="uil uil-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/" className="teacher__social-link">
                            <i className="uil uil-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="teacher__item">
                    <div className="teacher__img-box">
                        <img src={persona} alt="" />
                    </div>
                    <h3 className="teacher__title">Kelly Franklin,</h3>
                    <span>Designer</span>
                    <div className="teacher__social">
                        <a href="https://www.facebook.com/" className="teacher__social-link">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" className="teacher__social-link">
                            <i className="uil uil-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/" className="teacher__social-link">
                            <i className="uil uil-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PeopleSection;