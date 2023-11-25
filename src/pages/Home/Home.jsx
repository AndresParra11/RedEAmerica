// eslint-disable-next-line no-unused-vars
import React from "react";
import Nav from "../../components/Nav/Nav";
import About from "./About";
import Header from "./Header";
import PeopleSection from "./PeopleSection";
import Marcas from "./Marcas";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
    <Nav />
    <Header/>
    <About />
    <PeopleSection />
    <Marcas />
    <Footer />
    </>
  );
};

export default Home;
