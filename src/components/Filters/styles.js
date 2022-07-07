import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
<<<<<<< HEAD
  oveflow-y: scroll;
  width: 300px;
  cursor:pointer;

  margin: 1rem 0 1rem 0;

=======
  overflow-x: scroll;
  width: 86.6%;
  cursor: pointer;
  @media (min-width: 420px) {
    justify-content: center;
  }
>>>>>>> d4bfa89b75d68f5bec07b48f1469cd4736a9de04
  @media (min-width: 700px) {
    width: 500px;
    height: auto;
  }
`;

export const Circle = styled.div`
<<<<<<< HEAD
diplay: flex;
border-radius: 50px;
border: 1px solid var(--primary-color);
justify-content: center;
align-items: center;
width: fit-content;
height: fit-content;
padding: ${(props) => props.padding};
background-color: ${(props) => props.color};
=======
  display: flex;
  border-radius: 50px;
  border: 1px solid var(--primary-color);
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 2px 4px 2px 4px;
  background-color: ${(props) => props.color};
>>>>>>> d4bfa89b75d68f5bec07b48f1469cd4736a9de04

  svg {
    filter: ${(props) => props.iconColor};

    @media (min-width: 700px) {
<<<<<<< HEAD
    height:30px;
    width: auto;}
=======
      height: 35px;
      width: auto;
>>>>>>> d4bfa89b75d68f5bec07b48f1469cd4736a9de04
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 0 5px 0 5px;
  @media (min-width: 700px) {
    height: 75px;
    width: 75px;
  }
`;

export const Title = styled.h4`
  color: var(--primary-color);
  font-size: 0.7rem;
  font-family: "Montserrat";
  font-weight: 300;
`;
