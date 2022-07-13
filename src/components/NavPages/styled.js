import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 39.5px;
  color: ${(props) => props.geralColor};
  z-index: 9;
  border-bottom: ${(props) => props.borderBottom};
  font-family: "Montserrat";
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding-left: 6px;
  cursor: pointer;
`;
