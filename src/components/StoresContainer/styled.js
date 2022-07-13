import styled, { keyframes }from "styled-components"


const spin = keyframes`
    0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`


export const StoresContainerStyled = styled.ul`
    display: flex;
    margin-left: 4vw;
    flex-direction: column;
    height: 60vh;
    overflow-y: scroll;

    width: 50vw;

    @media (max-width: 865px) {

        width: 80vw;
        height: 40vh;
        
    }


`

export const CardStore = styled.li`
border: 1px solid var(--primary-color);
border-radius: 5px;
margin: 1rem;
color: var(--invert);
padding: 1rem;
cursor: pointer;
display: flex;
align-items: center;
gap: 1rem;

.loading {
  border: 3px solid #b29e85; /* Light grey */
  border-top: 3px solid var(--primary-color); /* Blue */
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 2s linear infinite;
}


>img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    //overflow: hidden;
    border: 2px solid var(--invert);

}



>div:nth-child(2) {

    >p:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 7rem;
        font-size: small;
        
    }
}

>div:nth-child(3) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

>p {
    width: 60%;
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;

    font-size: small;
    margin-top: 0.5rem;
    text-align: end;
}

@media (max-width: 500px) {

display: none;

}
}

`




