import styled from "styled-components";

export const NavContainer = styled.div`
  width: 150px;
  height: fit-content;
  background-color: var(--secondary-color);
  border-top: 0.5px solid black;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PageContainer = styled.div`
  width: 100%;
  height: 39.5px;
  border-bottom: ${(props) => props.borderBottom};
  font-family: "Montserrat";
  font-size: 15px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  //0.5px solid black
`;
