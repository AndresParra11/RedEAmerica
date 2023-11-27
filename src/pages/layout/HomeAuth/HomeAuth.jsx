// eslint-disable-next-line no-unused-vars
import React from "react";
import "./HomeAuth.css";
import Bloc_Layout from "../../Blog/layout/Bloc_Layout";
import PopularContent from "../../Blog/PopularContent";

const HomeAuth = () => {
  return (
    <>
    <div className="homeAuth">
      <div className="homeAuth__container">
        <div className="homeAuth__container__content">
          <h1 className="section__title">Ultimos Recursos académicos</h1>
          <Bloc_Layout/>
          <Bloc_Layout/>
          <Bloc_Layout/>
          <Bloc_Layout/>
        </div>
        <div className="homeAuth__container_related">
        <h2 className="title_post">Post populares</h2>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        </div>
      </div>

    </div>
    </>
  );
};

export default HomeAuth;
