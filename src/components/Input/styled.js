import styled from "styled-components";

export const InputStyled = styled.input`

outline: none;
border: none;
border-bottom: 1px solid;
width: 100%;
padding-left: 1.5rem;
padding-bottom: 0.1rem;
background-color: transparent;


    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      //-webkit-text-fill-color: #fff;
      box-shadow: 0 0 0 30px #fff inset !important;
    }

`

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 0.5rem;
    width: 100%;

    >svg {
        position: absolute;
        bottom: 0;
    } 

    >svg:nth-child(4) {
        right: 2px;
        cursor: pointer;
    }

`