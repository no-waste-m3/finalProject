import styled from "styled-components";

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    gap: 0.5rem;
    width: 100%;
    flex-wrap: nowrap;

    >label {
        color: var(--invert);
        >span {
            color: red;
            font-size: small;
        }
    }

    >svg {
        position: absolute;
        bottom: 0;
    } 

    >svg:nth-child(4) {
        right: 2px;
        cursor: pointer;
    }

    >select {
        cursor: pointer;
    }

    >input, >select {

        outline: none;
border: none;
border-bottom: 1px solid ${(props) => !!props.isError ? 'red' : 'var(--invert);'};
width: 100%;
padding-left: 1.5rem;
padding-bottom: 0.1rem;
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
        color: black
    }

    }

`