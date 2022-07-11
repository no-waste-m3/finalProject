import React, { useContext } from "react";
import { Circle, Container, Wrapper } from "./styles";
import { FaCoffee, FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { GiSlicedBread } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { Title } from "./styles";
import { useState } from "react";
import { ProductsFiltersContext } from "../../providers/ProductsFilters";

export const Filters = () => {
  const [selected, setSelected] = useState("Todos");

  const { categoryFilters } = useContext(ProductsFiltersContext);

  const handleFilter = (name) => {
    if (name === "Pizzarias") {
      return categoryFilters("pizzaria");
    } else if (name === "Burgers") {
      return categoryFilters("burger");
    } else if (name === "Mercado") {
      return categoryFilters("mercado");
    } else if (name === "Padaria") {
      return categoryFilters("padaria");
    } else if (name === "Doces") {
      return categoryFilters("doces");
    } else if (name === "Cafeterias") {
      return categoryFilters("cafeteria");
    } else {
      return categoryFilters("todos");
    }
  };

  const objects = [
    { name: "Todos", icon: <GiKnifeFork size="25px" /> },
    { name: "Pizzarias", icon: <FaPizzaSlice size="25px" /> },
    { name: "Burgers", icon: <FaHamburger size="25px" /> },
    { name: "Mercado", icon: <FaStore size="25px" /> },
    { name: "Padaria", icon: <GiSlicedBread size="25px" /> },
    { name: "Doces", icon: <GiCupcake size="25px" /> },
    { name: "Cafeterias", icon: <FaCoffee size="25px" /> },
  ];

  // console.log(selected);

  return (
    <Container>
      {objects.map((object) => (
        <Wrapper
          key={object.name}
          onClick={() => {
            handleFilter(object.name);
            setSelected(object.name);
          }}
        >
          <Circle
            iconColor={
              selected === object.name
                ? "invert(99%) sepia(10%) saturate(501%) hue-rotate(320deg) brightness(111%) contrast(100%);"
                : "invert(77%) sepia(67%) saturate(6387%) hue-rotate(5deg) brightness(100%) contrast(102%);"
            }
            color={selected === object.name ? "#F57C00" : "#ffffff"}
            padding={
              object.name === "Pizzarias"
                ? "6px 6px 6px 10px"
                : "6px 8px 6px 8px"
            }
          >
            {object.icon}
          </Circle>
          <Title>{object.name}</Title>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Filters;
