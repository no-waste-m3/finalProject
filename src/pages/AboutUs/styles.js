import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  padding-top: 50px;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  img {
    margin: 10% 0 0 0;
    width: 100%;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin: 5% 0 0 5%;

    img {
      margin: 0 0 0 0;
      width: auto;
      height: 600px;
    }
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  img {
    width: 100%;
    margin: -55% 0 10% -7%;
  }

  svg {
    scale: 0.6;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin: -10% 0 0 15%;

    img {
      height: 600px;
      width: auto;
      margin: 5% 0 0 0;
    }
    svg {
      scale: 1;
    }
  }
`;

export const Text = styled.h2`
  margin: 0 0 -55% 0;
  width: 90%;
  text-align: justify;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  line-height: 35px;
  font-size: 18px;
  color: #f57c00;
  @media (min-width: 700px) {
    margin: 5px 5px 5px 5px;
    width: 40%;
    line-height: 40px;
    font-size: 22px;
  }
`;
