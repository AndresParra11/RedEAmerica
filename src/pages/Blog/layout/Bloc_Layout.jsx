// import React from 'react'
import './Bloc_Layout.css';
import { Link } from 'react-router-dom';
import ejemplo from '../../../assets/Img/about.jpg'

const Bloc_Layout = () => {
  return (
    <div className='container_blog'>
        <div className='card'>
            <div className='card__header'>
            <img
                src={ejemplo}
                alt='img'
            />
            </div>
            <div className='card__body'>
                <h2 className='card__body__title'>Lorem ipsum dolor sit amet.</h2>
                <p className='card__body__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatem, voluptatibus, voluptatum, quidem iusto voluptas
                voluptates quibusdam quae voluptate repellendus dolorum? Quisquam
                voluptatem, voluptatibus, voluptatum, quidem iusto voluptas
                voluptates quibusdam quae voluptate repellendus dolorum?
            </p>
            <Link to="/login" className="button button__blog">Leer más</Link>
            <div className='card__body__footer'>
                <span className='card__body__footer__date'>12/12/2021</span>
                <span className='card__body__footer__author'>By: John Doe</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Bloc_Layout