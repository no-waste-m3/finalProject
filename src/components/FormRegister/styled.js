import styled from "styled-components";
import { css } from "styled-components";

export const FormRegisterStyled = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    gap: 0.7rem;
    >div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 16rem;
        width: 90%;

        >div {
            display: flex;
            width: 100%;
            gap: 0.5rem;
        }
    }

`

export const StepButtons = styled.div`

    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-bottom: 1rem;

    >button {
        height: fit-content;
    }

    >button:disabled {
        visibility: hidden;
    }


`

const dragActive = css`
    border-color: green;
`
const dragRejected = css`
    border-color: red;
`


export const UploadContainer = styled.div.attrs({
    className: 'dropzone'
})`
    border: 1px dashed var(--primary-color);
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    transition: height 0.2s ease;

    ${(props) => props.isDragActive && dragActive};
    ${(props) => props.isDragReject && dragRejected};


`

const uploadMessageColors = {

    default: 'var(--invert)',
    error: 'red',
    success: 'green'
}

export const UploadMessage = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    color: ${props => uploadMessageColors[props.type || 'default']};

    >p {
        text-align: center;
    }

`

export const MessageFeedback = styled.p`
text-align: center;
margin-top: 5%;
font-size: small;

`