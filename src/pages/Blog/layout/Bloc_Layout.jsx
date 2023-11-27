// import React from 'react'
import "./Bloc_Layout.css";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Bloc_Layout = ({ popularContent, id }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/detailPost/${id}`);
  };
  return (
    <div className="container_blog">
      <div className="card">
        <div className="card__header">
          <img src={popularContent.image} alt="img" />
        </div>
        <div className="card__body">
          <h2 className="card__body__title">{popularContent.title}</h2>
          <p className="card__body__description">
            {popularContent.description}
          </p>
          <Button className="button button__blog" onClick={handleNavigate}>
            Leer más
          </Button>
          <div className="card__body__footer">
            <span className="card__body__footer__date">
              {popularContent.date}
            </span>
            <span className="card__body__footer__author">
              By: {popularContent.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Bloc_Layout.propTypes = {
  popularContent: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Bloc_Layout;
