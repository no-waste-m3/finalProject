import styled from "styled-components";


export const ToogleStyled = styled.button.attrs({ type: 'button'})`

    border-radius: 30px;
    padding: 0.1rem;
    width: 3.2rem;
    background-color: var(--background);
    border-color: var(--invert);
    display: flex;
    color: var(--primary-color);
    font-size: 1.5rem;
    position: relative;

    >div:nth-child(2) {
        position: absolute;
        bottom: -6px;
    }

    /*>div {
        display: flex;
        justify-content: ${(props) => props.theme === 'light' ? 'flex-start' : 'flex-end'};
    }*/

`