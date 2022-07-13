import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
  height: 100vh;
  padding-top: 12vh;

`;

export const Content = styled.div`


`;

export const Div1 = styled.div`
display: flex;
flex-direction:column;
max-width: 100vw;
width:100vw;
align-items: center;

>div {
    width: 90%;
    color: var(--invert);

    >div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        

        >div {
            display: flex;
            flex-wrap: wrap;
            text-align: center;

            >div {
                width: 50%;
            }
        }
    }
    
    @media (min-width: 700px) {
        width: 50%;
}
}

img{
    width: 35%;
    min-width: 400px;
    height: 80vh;
}


@media (min-width: 700px) {
display: flex;
flex-direction: row;
width: 100%;
align-items: flex-start;

img{
    margin: 0 0 0 0;
    width: 35%;
    min-width: 400px;
    height: 80vh;
}
}
`;


export const Div2 = styled.div`

display: flex;
flex-direction: column;
width: 100%;
align-items: center;


img{
    width:100%;
    margin: -55% 0 10% -7%;
}

svg{
    scale: 0.6;
}

@media (min-width: 700px) {
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
margin: -10% 0 0 15% ;

img{
    height:600px;
    width: auto;
    margin: 5% 0 0 0;
}
svg{
    scale: 1;
}
}
`;




export const Text = styled.h2`
width: 100%;
text-align: center;
font-family: 'Inter', sans-serif;
font-weight: 500;
font-size: 1.2rem;
color: #F57C00;

`;