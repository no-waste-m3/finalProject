import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;

  .modal__title {
    text-align: center;
  }

  .modal__buttons {
    display: flex;
    gap: 1rem;
  }
`;
