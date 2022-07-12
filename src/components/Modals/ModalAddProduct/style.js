import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  justify-content: center;

  select {
    outline: none;
    border: none;
    border-bottom: 1px solid var(--invert);

    width: 100%;
    font-size: 1rem;

    padding-bottom: 0.2rem;
    background-color: transparent;
    color: var(--invert);

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--invert);
      box-shadow: 0 0 0 30px var(--background) inset !important;
    }

    option {
      color: black;
    }
  }

  .modal__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }
`;
