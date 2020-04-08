import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap');

  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, .1)
  }

  ol,
  ul {
    padding: 0;
    margin: 0;
    list-style: none
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font-weight: 400
  }

  fieldset {
    border: 0;
    padding: 0
  }

  [required] {
    -webkit-box-shadow: none;
    box-shadow: none
  }

  body {
    font-family: 'Lato', sans-serif;

    /* overscroll-behavior: contain; */
    /* user-select: none; */

    font-size: 16px;
    font-weight: 400;
    line-height: 1.35;
    color: #3e3e3e;
    background: #FFF;
  }

  
  a {
    color: #3e3e3e;
    text-decoration: none
  }

  a:focus {
    outline: 0
  }


  input,
  select {
    font-family: Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif
  }
   
`
