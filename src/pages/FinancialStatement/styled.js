import styled from "styled-components";


export const Container = styled.div`
  height: fit-content;
  padding-top: 12vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vw;
  align-items: center;
  
  @media (max-width: 420px) {
    
    gap: 1rem;
    font-size: 0.8rem;
    
  }

`

export const FirstBalance = styled.div`
display: flex;
gap: 5vw;
@media (max-width: 420px) {
    
    gap: 1rem;
    font-size: 0.8rem;
    flex-direction: column;
    
  }

`

export const SecondBalance = styled.div`
  width: 60vw;

  @media (max-width: 420px) {
    
    width: 80vw;
    
  }

`

export const StyledFinancialBalanceDiv = styled.div`
  display: flex;
  flex-direction: column;
  .balance-div {

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 0.5rem;

    border-bottom: 1px solid var(--primary-color);
    padding-right: 5rem;

    @media (max-width: 625px) {
    padding-right: 1rem;
    font-size: 0.9rem;
      
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    figure:nth-child(1) {
      color: var(--primary-color);
      font-size: 1.9rem;
    }
  }

  .text-div {
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    div {
      width: 100%;
      

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-left: 0;
      margin-bottom: 1rem;

    }

    @media (max-width: 625px) {
    
    font-size: 0.8rem;
      
    }

    .last {
      border-top: 1px solid var(--primary-color);
      padding-top: 0.5rem;
    }

  }
`;