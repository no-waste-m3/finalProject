import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const Toast = styled(ToastContainer)`
  .Toastify__toast {
    background-color: #F8DDB7;

    color: ${(props) => props.wadeTheme === 'error' ? 'red' : props.wadeTheme === 'success' ?  'green' : 'black'};
    font-size: 17px;
    font-weight: 600;
  }
  .Toastify__toast-body {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #F8DDB7;
  }

  .Toastify__close-button {
    //#F47F3D
    color: var(--primary-color);
  }

  .Toastify__toast-icon {
    margin-inline-end: 0;
    height: 6rem;
    width: 45%;

    >svg {
      margin-top: -1rem;
      margin-right: 10px;
    }

    >div {
      margin-top: -2rem;
    }

    >div >div {
      text-align: center;
    }
  }

  .Toastify__progress-bar {
    
    --toastify-color-progress-light: ${(props) => props.wadeTheme === 'error' ? 'red' : props.wadeTheme === 'success' ?  'green' : 'linear-gradient( to right, #F57C00,  #F8DDB7 )'};
    }
`;
