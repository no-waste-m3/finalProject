import styled from "styled-components";


export const ContainerImagePreview = styled.div`
    position: absolute;
    background-color: var(--white-0);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    height: 110%;
    gap: 0.2rem;
    box-sizing: content-box;
    border: 2px solid var(--primary-color);
    background-color: var(--background);
`

export const FileInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--invert);

    >strong {
        display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
    }

    span {
        font-size: small;
    }
    width: 60%;
`

export const Preview = styled.img`
    width: 15%;
    height: 80%;
    border-radius: 5px;
`