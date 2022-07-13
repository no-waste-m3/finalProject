import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;

  justify-content: space-around;
  padding-top: 2vh;
  
  @media (max-width: 600px) {
      align-items: center;
      flex-direction: column;
      gap: 1rem;
  }
`;

export const Payment = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 40%;
  border: 1px solid var(--primary-color);

  > h3:nth-child(1) {
    color: var(--invert);
    width: 100%;
    text-align: center;
    padding: 0.5rem;
  }

  @media (max-width: 760px) {
      width: 50%;
  }

  @media (max-width: 600px) {
      width: 80%;
  }

  > div:nth-child(2) {
    display: flex;
    width: 100%;
    height: fit-content;

    > button {
      width: 100%;
      color: var(--invert);
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--primary-color);
      border-left: 1px solid var(--primary-color);

      > img {
        width: 20%;
        height: 30%;
        filter: invert(38%) sepia(30%) saturate(2476%) hue-rotate(12deg)
          brightness(118%) contrast(119%);
        //filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);
      }
    }

    > button:nth-child(1) {
      border-left: none;
    }
  }

  > div:nth-child(3) {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    > form {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      width: 20rem;
      gap: 1rem;
      align-items: center;
      justify-content: center;

      @media (max-width: 420px) {
      width: 90%;
  }

      > div {
        display: flex;
        width: 100%;
        gap: 1rem;
      }

      input {
        width: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--primary-color);
        color: var(--invert);
      }

      input::placeholder {
        color: var(--invert);
      }
    }
  }
`;

export const Details = styled.div`
border-radius: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--primary-color);
  margin-bottom: 1rem;

  > h3:nth-child(1) {
    color: var(--invert);
    width: 100%;
    text-align: center;
  }

  img {
    width: 4rem;
    height: 3rem;
  }

  > div:nth-child(2) {
    width: 100%;

    > li {
      width: 100%;
      //background-color: red;
    }
  }

  > div:nth-child(3) {
    width: 100%;

    display: flex;
    margin-top: 2rem;
    border-top: 1px solid var(--primary-color);
    justify-content: space-between;
    padding-top: 1rem;
  }

  h4 {
    color: var(--invert);
  }

  p {
      font-size: small;
  }


  @media (max-width: 600px) {
      width: 20rem;
  }

  @media (max-width: 420px) {
      width: 75%;
  }
`;
