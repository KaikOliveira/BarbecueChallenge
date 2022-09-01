import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  :root {
    --background: #f5f5f5;
    --white: #fff;
    --black: #000;
    --text: #6A777D;
    --gray: #F1F1F1;
    --gray-high: #76899F;
    --red: #e54b4b;
    --title: #232129;
    --text: #454851;
    --placeholder: #666360;
    --primary: #e93535;
    --primary-high: #A32525;
    --primary-low: #FBD7D7;
    --text-low: #5e626e;
    --text-high: #383b42;
  }
  html {
    font-size: 62.5%; /* = 10px */
  }
  /* 58.333% = 9.3px */
  /* 56.25% = 9px */
  /* 50% = 8px */
  @media(max-width: 768px) {
    html {
      font-size: 58.333%;
    }
  }
  @media(max-width: 425px) {
    html {
      font-size: 50%;
    }
  }
  body {
    background: var(--background);
    color: var(--black);
  }
  body, input, button, textarea, span, p {
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Raleway', sans-serif !important;
  }

  span, p {
    letter-spacing: 0.075rem;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast-container {
    z-index: 99999999 !important;
  }
`;
