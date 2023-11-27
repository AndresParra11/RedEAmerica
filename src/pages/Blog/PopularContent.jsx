/* eslint-disable no-unused-vars */
import React from 'react'
import './PopularContent.css';
import ejemplo from '../../assets/Img/about.jpg';

const PopularContent = () => {
  return (
    <div>
        <div className='post_card'>
            <div className='post_card__header'>
            <img
                src={ejemplo}
                alt='img'
            />
            </div>
            <div className='post_card__body'>
            <h2 className='post_card__body__title'>Lorem ipsum dolor sit amet.</h2>
            <p className='post_card__body__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <div className='post_card__body__footer'>
                <span className='post_card__body__footer__date'>12/12/2021</span>
                <span className='post_card__body__footer__author'>By: John Doe</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PopularContent