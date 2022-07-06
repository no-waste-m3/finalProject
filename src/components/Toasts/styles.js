import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const Toast = styled(ToastContainer)`
  .Toastify__toast {
    background-color: #F8DDB7;

    color: #ffffff;
    font-size: 17px;
    font-weight: 600;
  }
  .Toastify__toast-body {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #F8DDB7;
  }

  .Toastify__toast-icon {
    width: 7rem;
    height: 100%;
  }

  .Toastify__progress-bar {
    --toastify-color-progress-light: linear-gradient( to right, #F57C00,  #F8DDB7 );
  }
`;
