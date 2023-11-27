// eslint-disable-next-line no-unused-vars
import React from "react";
import "./HomeAuth.css";
import Bloc_Layout from "../../Blog/layout/Bloc_Layout";
import PopularContent from "../../Blog/PopularContent";
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";

const popularContents = [
  {
    title: "El desarrollo de la inteligencia emocional en los niños",
    description:
      "La inteligencia emocional de los niños es un tema que ha cobrado mucha importancia en los últimos años. La educación emocional es un proceso que se inicia desde el nacimiento y que se va desarrollando a lo largo de toda la vida. Los niños que aprenden a controlar sus emociones desde pequeños, tienen más posibilidades de ser adultos felices y equilibrados.",
    date: "12/12/2021",
    author: "Andrés Parra",
    image:
      "http://www.neuronsandpeople.com/wp-content/uploads/2018/03/emociones-6-a%C3%B1os-300x174.png",
    country: "Colombia",
  },
  {
    title: "Innovaciones tecnológicas que transformarán nuestra sociedad",
    description:
      "Desde la inteligencia artificial hasta la realidad virtual, exploraremos las innovaciones tecnológicas más impactantes que cambiarán la forma en que vivimos y nos relacionamos en los próximos años.",
    date: "11/11/2023",
    author: "Angie Díaz",
    image:
      "https://icorp.com.mx/wp-content/uploads/2015/07/Principales-innovaciones-en-tecnologia-para-TI-scaled.webp",
    country: "Colombia",
  },
  {
    title: "Cómo fomentar la creatividad en la educación formal",
    description:
      "La creatividad es una habilidad esencial en el mundo actual. Analizaremos estrategias y enfoques para cultivar la creatividad en entornos educativos formales, preparando a los estudiantes para enfrentar desafíos de manera innovadora.",
    date: "08/10/2021",
    author: "Daniela Ramírez",
    image:
      "https://i0.wp.com/pedernal.org/lacortinadehumo/wp-content/uploads/2019/07/creatividad.jpg?fit=1200%2C913&ssl=1",
    country: "Brasil",
  },
  {
    title: "El impacto de la sostenibilidad en la industria alimentaria",
    description:
      "Exploraremos cómo las prácticas sostenibles están transformando la industria alimentaria, desde la producción hasta el consumo, y cómo estas acciones pueden contribuir a un futuro más saludable para el planeta.",
    date: "02/06/2023",
    author: "Luis Ramón",
    image: "https://picsum.photos/200/300",
    country: "México",
  },
];

const HomeAuth = () => {
  const [selectedCountry, setSelectedCountry] = useState("Todos los países");
  const [selectedMonth, setSelectedMonth] = useState("Todos los meses");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  return (
    <>
      <div className="homeAuth">
        <div className="homeAuth__container">
          <div className="homeAuth__container__content">
            <h1 className="section__title">Últimos Recursos académicos</h1>
            <Select
              onChange={handleCountryChange}
              value={selectedCountry}
              sx={{ marginBottom: "20px" }}
            >
              <MenuItem value="Todos los países">Todos los países</MenuItem>
              <MenuItem value="Colombia">Colombia</MenuItem>
              <MenuItem value="Brasil">Brasil</MenuItem>
            </Select>
            <Select
              onChange={handleMonthChange}
              value={selectedMonth}
              sx={{ marginBottom: "20px", marginLeft: "20px" }}
            >
              <MenuItem value="Todos los meses">Todos los meses</MenuItem>
              <MenuItem value="12">Diciembre</MenuItem>
              <MenuItem value="11">Noviembre</MenuItem>
              <MenuItem value="10">Octubre</MenuItem>
              <MenuItem value="9">Septiembre</MenuItem>
              <MenuItem value="8">Agosto</MenuItem>
              <MenuItem value="7">Julio</MenuItem>
              <MenuItem value="6">Junio</MenuItem>
              <MenuItem value="5">Mayo</MenuItem>
              <MenuItem value="4">Abril</MenuItem>
              <MenuItem value="3">Marzo</MenuItem>
              <MenuItem value="2">Febrero</MenuItem>
              <MenuItem value="1">Enero</MenuItem>
            </Select>
            {popularContents
              .filter(
                (content) =>
                  (selectedCountry === "Todos los países" ||
                    content.country === selectedCountry) &&
                  (selectedMonth === "Todos los meses" ||
                    new Date(content.date).getMonth() + 1 ===
                      parseInt(selectedMonth))
              )
              .map((popularContent, index) => (
                <Bloc_Layout
                  key={index}
                  id={index}
                  popularContent={popularContent}
                />
              ))}
          </div>
          <div className="homeAuth__container_related">
            <h2 className="title_post">Lo más popular...</h2>
            {popularContents.map((popularContent, index) => (
              <PopularContent key={index} popularContent={popularContent} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAuth;
