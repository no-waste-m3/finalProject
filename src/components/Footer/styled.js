import styled from "styled-components";

export const FooterContainer = styled.header`

  height: 10.64%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);

  @media (min-width: 700px) {
    height: 8.78%;
  }
`;

export const FooterCentralized = styled.div`
  margin: 0 0 0 5%;
  height: 100%;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 700px) {
    margin: 0 0 0 0;
    width: 86.6%;
    justify-content: space-between;
  }
`;

export const FooterCenterDiv = styled.div`
height: 100%;
width: 200px;
display: flex;
align-items: center;
justify-content: space-between;
@media (min-width: 700px) {
  width: 466px;
}
`;

export const Title = styled.p`
color: black;
font-size: 16px;
font-family: "Montserrat";
text-align: center;
margin: 0 5% 0 0;
@media (min-width: 700px) {
  font-size: 18px;
  margin: 0 0 0 0;
  text-align: none;
}
`;
