import React from "react";
import { Circle, Container, Wrapper } from "./styles";
import { FaCoffee, FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { GiSlicedBread } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { Title } from "./styles";
import { useState } from "react";

export const Filters = () => {
  const [selected, setSelected] = useState("Todos");

  const objects = [
    { name: "Todos", icon: <GiKnifeFork size="25px" /> },
    { name: "Pizzarias", icon: <FaPizzaSlice size="25px" /> },
    { name: "Burgers", icon: <FaHamburger size="25px" /> },
    { name: "Mercado", icon: <FaStore size="25px" /> },
    { name: "Padaria", icon: <GiSlicedBread size="25px" /> },
    { name: "Doces", icon: <GiCupcake size="25px" /> },
    { name: "Cafeterias", icon: <FaCoffee size="25px" /> },
  ];

  console.log(selected);

  return (
    <Container>
      {objects.map((object) => (
        <Wrapper key={object.name} onClick={() => setSelected(object.name)}>
          <Circle
            iconColor={
              selected === object.name
                ? "invert(99%) sepia(10%) saturate(501%) hue-rotate(320deg) brightness(111%) contrast(100%);"
                : "invert(77%) sepia(67%) saturate(6387%) hue-rotate(5deg) brightness(100%) contrast(102%);"
            }
            color={selected === object.name ? "#F57C00" : "#ffffff"}
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
