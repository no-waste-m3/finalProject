import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 

    :root{
        ${(props) => {
          return (
            props.theme === "light" &&
            css`
              --primary-color: #f57c00;
              --secondary-color: #ffb886;

              --filter-color: #ffb162;
              --hover-color: #ff6b09;

              --grey-0: #000000;
              --grey-1: #737373;
              --grey-yellow: #baae9c;

              --white-0: #ffffff;
              --background: #fff;
              --invert: black;
            `
          );
        }}

${(props) => {
          return (
            props.theme === "dark" &&
            css`
              --primary-color: #f57c00;
              --secondary-color: #ffb886;

              --filter-color: #ffb162;
              --hover-color: #ff6b09;

              --grey-0: #000000;
              --grey-1: #737373;
              --grey-yellow: #baae9c;

              --white-0: #fff;
              
              //140700
              --background: #1e1a17;
              --invert: #fff;
            `
          );
        }}
    }

    body {
        background-color: var(--background);
        -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
    }

    * {
        margin: 0;
        padding: 0;
        transition: color 0.4s;
        font-family: 'Montserrat';
        box-sizing: border-box;
    }

    ul, ol, li {
        list-style-type: none;
    }

    button{
        cursor: pointer;
    }
    a {
        color: var(--primary-color);
        font-weight: 900;
        text-decoration: none;
    }
`;
