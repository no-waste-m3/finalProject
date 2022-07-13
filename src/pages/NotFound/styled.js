import styled from "styled-components";


export const PageStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: var(--background);
    color: var(--invert);

    >div:nth-child(1) {
        height: 70%;
    }

    >div:nth-child(2) {
        text-align: center;
        width: 90%;
        
    }

    justify-content: flex-start;
    align-items: center;

`