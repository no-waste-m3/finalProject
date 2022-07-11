import styled from "styled-components";

export const ProgressBar = styled.div`
    display: flex;
    position: relative;
    gap: 6rem;

    ::after {
        content: '';
        width: 100%;
        position: absolute;
        top: calc(50% - 0.1rem);
        z-index: -2;
        height: 0.15rem;
        background-color: var(--grey-yellow);
    }

    @media (max-width: 780px) {
        gap: 5rem;
    }

    @media (max-width: 450px) {
        gap: 4rem;
    }
`

export const Step = styled.div`
    color: ${(props) => props.currentStep >= props.stepCounter ? 'white' : 'var(--grey-yellow)'};
    background-color: ${(props) => props.currentStep >= props.stepCounter ?'var(--primary-color)' : 'white'};
    padding: 0.1rem 0;
    width: 1.4rem;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid ${(props) => props.currentStep >= props.stepCounter ? 'var(--primary-color)' : 'var(--grey-yellow)'};
`

export const Progress = styled.div`
    width: ${(props) => (props.currentStep/props.stepsCounters.length)*100+'%'};
    box-sizing: content-box;
    padding-left: ${(props) => (props.currentStep+1)*1.4+'rem' };
    position: absolute;
    top: calc(50% - 0.1rem);
    z-index: -1;
    height: 0.15rem;
    background-color: var(--primary-color);

    @media (max-width: 780px) {
        padding-left: ${(props) => (props.currentStep+1)*1.2+'rem' };
    }

    @media (max-width: 450px) {
        padding-left: ${(props) => (props.currentStep+1)*1+'rem' };
    }
`