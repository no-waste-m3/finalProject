import styled from "styled-components";

export const StyledFinancialBalanceDiv = styled.div`
  position: fixed;
  top: 10rem;
  left: 5rem;

  .balance-div {
    width: 25rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 0.5rem;

    border-bottom: 1px solid var(--primary-color);

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

    div {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-left: 0;
      margin-bottom: 1rem;
      padding-right: 5rem;

    }
  }
`;