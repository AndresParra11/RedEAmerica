/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Blog.component.css";
import Sidebar from "../../pages/layout/Sidebar/Sidebar";
import CloudinaryUpload from "../../pages/Blog/Blog";

const BlogEditor = () => {
  const [style, setStyle] = useState({
    fontSize: "16px",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    textAlign: "left",
    textTransform: "none",
    color: "#000",
  });

  const handleFontSizeChange = (e) => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontSize: `${e.target.value}px`,
    }));
  };

  const toggleBold = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontWeight: prevStyle.fontWeight === "bold" ? "normal" : "bold",
    }));
  };

  const toggleItalic = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontStyle: prevStyle.fontStyle === "italic" ? "normal" : "italic",
    }));
  };

  const handleUnderlineClick = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      textDecoration:
        prevStyle.textDecoration === "underline" ? "none" : "underline",
    }));
  };

  const handleAlignmentClick = (alignment) => {
    setStyle((prevStyle) => ({ ...prevStyle, textAlign: alignment }));
  };

  const handleTextColorChange = (e) => {
    setStyle((prevStyle) => ({ ...prevStyle, color: e.target.value }));
  };

  // Similarmente, puedes implementar las otras funciones aquí...

  return (
    <div className="">
      <Sidebar />
      <div className="form__container">
        <form action="" method="post">
          <h2 className="form__title">Crea tu Blog</h2>
          <label htmlFor="" className="form__label">
            Título
          </label>
          <input
            className="input__form-text"
            type="text"
            placeholder="Pont tu título..."
          />
          <label htmlFor="" className="form__label">
            Autor
          </label>
          <input
            className="input__form-text"
            type="text"
            placeholder="Pon el autor..."
          />
          <label htmlFor="" className="form__label">
            Documentos
          </label>
          <CloudinaryUpload />
          <label htmlFor="" className="form__label">
            Contenido
          </label>
          <div className="sesction_form">
            <div className="row">
              <div className="col">
                <div className="first box">
                  <input
                    id="font-size"
                    type="number"
                    value={parseInt(style.fontSize)}
                    min="1"
                    max="100"
                    onChange={handleFontSizeChange}
                  />
                </div>
                <div className="second box">
                  <button type="button" onClick={toggleBold}>
                    <FaBold />
                  </button>
                  <button type="button" onClick={toggleItalic}>
                    <FaItalic />
                  </button>
                  <button type="button" onClick={handleUnderlineClick}>
                    <FaUnderline />
                  </button>
                </div>
                <div className="third box">
                  <button
                    type="button"
                    onClick={() => handleAlignmentClick("left")}
                  >
                    <FaAlignLeft />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAlignmentClick("center")}
                  >
                    <FaAlignCenter />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAlignmentClick("right")}
                  >
                    <FaAlignRight />
                  </button>
                </div>
                <div className="fourth box">
                  <button type="button">aA</button>
                  <button
                    type="button"
                    onClick={() => handleTextColorChange("text-slash")}
                  >
                    <FaAlignRight />
                  </button>
                  <input type="color" onChange={handleTextColorChange} />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <textarea
                  id="textarea1"
                  placeholder="Pon tu texto aquí"
                  style={style}
                ></textarea>
              </div>
            </div>
          </div>

          <Link to="/blog/create/publish" className="button form__button">
            Publicar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
