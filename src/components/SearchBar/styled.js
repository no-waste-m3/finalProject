import styled, { keyframes } from "styled-components";

const inputOpenAnimation = keyframes`
 0% { width: 0px; opacity: 0; }
 100% { width: 160px; opacity: 1; }
`;

export const SearchbarContainer = styled.div`
  height: 40px;
  width: 86%;
  border: 1px solid var(--grey-1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 25px;
  top: 13%;
  @media (min-width: 530px) {
    left: 6vh;
  }
`;
export const CenterDiv = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  background-color: transparent;
  font-size: 14px;
  color: var(--grey-1);
  width: 72%;
  border: 0;
  font-family: "Montserrat";
  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }
`;

export const RightDiv = styled.div`
  width: 10%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Line = styled.div`
  width: 1px;
  height: 25px;
  background-color: var(--grey-1);
`;

export const InputDesktop = styled.input`
  height: 15px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid black;
  animation-name: ${inputOpenAnimation};
  animation-duration: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }
`;
