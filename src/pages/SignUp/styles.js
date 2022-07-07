import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  border-radius: 1rem;
  //0px 0px 50px 10px rgba(0, 0, 0, 0.25)
  box-shadow: 0px 0px 5px black;
  width: 36rem;

  @media (max-width: 620px) {
    width: 80vw;
}
`;

export const RegisterFormContainer = styled.div`

  width: 50%;
  gap: 0.5rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;

  @media (max-width: 545px) {
    width: 80%;
}

`

export const RegisterPage = styled.div`

    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
`
