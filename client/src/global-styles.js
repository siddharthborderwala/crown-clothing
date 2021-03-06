import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Open Sans Condensed';
      padding: 2rem 6rem;
    }

    a {
      color: black;
      text-decoration: none;
    }

    .App {
      max-width: 1400px;
      margin: 0 auto;
    }

    .App-logo {
      height: 40vmin;
      pointer-events: none;
    }
`;
