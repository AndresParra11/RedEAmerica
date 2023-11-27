/* eslint-disable no-unused-vars */
import React from "react";
import "./PopularContent.css";
import PropTypes from "prop-types";

const PopularContent = ({ popularContent }) => {
  return (
    <div>
      <div className="post_card">
        <div className="post_card__header">
          <img src={popularContent.image} alt="img" />
        </div>
        <div className="post_card__body">
          <h2 className="post_card__body__title">{popularContent.title}</h2>
          <p className="post_card__body__description">
            {popularContent.description}
          </p>
          <div className="post_card__body__footer">
            <span className="post_card__body__footer__date">12/12/2021</span>
            <span className="post_card__body__footer__author">
              By: {popularContent.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

PopularContent.propTypes = {
  popularContent: PropTypes.object.isRequired,
};

export default PopularContent;
