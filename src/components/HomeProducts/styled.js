import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: fit-content;
  gap: 15px;
  @media (min-width: 1260px) {
    flex-wrap: wrap;
  }
`;
