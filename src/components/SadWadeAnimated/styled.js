import styled, { keyframes } from "styled-components"

const lagrimaDescendo = keyframes`

from {
    opacity: 0;
    transform: translateY(-2rem);
}

100% {
    transform: translateY(0);
}
`

const wadeAnimating = keyframes`

0% {
    transform: rotateY(-10deg);
    //transform: rotateX(-20deg);
}

50% {
    transform: rotateY(15deg);
    //transform: rotateX(0deg);

}

100% {
    transform: rotateY(-10deg);
    //transform: rotateX(-20deg);
}
`



const tracoDescendo = keyframes`

from {
    opacity: 0;
    transform: translateY(-8rem);
}

100% {
    transform: translateY(0);
}
`


const olhoDireitoMechendo = keyframes`

0% {
    transform: translateY(0rem);
    //transform: rotateX(-20deg);
}

50% {
    transform: rotateY(0deg);
    transform: translateY(0.15rem);
    //transform: rotateX(0deg);

}

100% {
    transform: rotateY(40deg);
    transform: translateY(0rem);

    //transform: rotateX(-20deg);
}

`

const narizMechendo = keyframes`

from {
    transform: translateY(-0.1rem);
}

100% {
    transform: translateY(0);
}
`


export const SvgAnimated = styled.svg`

#wade {
    animation: ${wadeAnimating} 2s ease-in-out;
    animation-iteration-count: infinite;
}

#lagrima {
    animation: ${lagrimaDescendo} 2s ease-in-out;
    animation-iteration-count: infinite;
}

#traco1 {
    animation: ${tracoDescendo} 1s ease-in-out;
    //animation-iteration-count: infinite;
}

#traco2 {
    animation: ${tracoDescendo} 1s ease-in-out;
    animation-delay: 0.4s;
    //animation-iteration-count: infinite;
}

#traco3 {
    animation: ${tracoDescendo} 1s ease-in-out;
    animation-delay: 0.8s;
    //animation-iteration-count: infinite;
}

#nariz {
    animation: ${narizMechendo} 0.7s ease-in-out;
    animation-iteration-count: infinite;
}

#olhoDireito {
    animation: ${olhoDireitoMechendo} 1s ease-in-out;
    animation-iteration-count: infinite;
}

#olhoEsquerdo {
    animation: ${olhoDireitoMechendo} 1s ease-in-out;
    animation-iteration-count: infinite;
}



`