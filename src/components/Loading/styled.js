import styled from "styled-components";



export const ContainerLoading = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
    z-index: 99999;

    >div {
        width: 5%;
        height: 5%;

        position: relative;

        >img {
            position: absolute;
            top: 0%;
            left: 15%;
            width: 75%;
        }

        @media(max-width: 400px) {

        width: 10%;
        height: 10%;

        >img {
            top: -2%;
            left: 10%;
            width: 75%;
        }

        }
    }



`