import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  html {
    background: ${theme.colors.background};
    background-repeat: no-repeat;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, li, a, button {
    font-family: "Roboto";
    color: ${theme.colors.primary};
    line-height: 1.6em;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
  }

  p,
  li,
  button,
  a {
    font-size: 20px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
  }
`;

export default GlobalStyles;
