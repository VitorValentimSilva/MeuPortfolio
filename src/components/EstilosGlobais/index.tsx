import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Source Sans 3", sans-serif;
    background-color: ${({ theme }) => theme.colors.background || "#F5F5F5"};
  }

  body {
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text || "#333333"};
  }

  main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0.5em 0;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary || "#2D3E50"};
  }

  p {
    margin: 0.75em 0;
  }

  a {
    color: ${({ theme }) => theme.colors.link || "#2D3E50"};
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover, a:focus {
    color: ${({ theme }) => theme.colors.linkHover || "#FF6F61"};
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
    border-style: none;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5;
  }

  button, input {
    overflow: visible;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.colors.buttonBackground || "#2D3E50"};
    color: ${({ theme }) => theme.colors.buttonText || "#FFFFFF"};
    padding: 0.5em 1em;
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;
  }

  button:hover, button:focus {
    background-color: ${({ theme }) => theme.colors.buttonHover || "#FF6F61"};
    outline: none;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.selectionBackground || "#FF6F61"};
    color: ${({ theme }) => theme.colors.selectionText || "#FFFFFF"};
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbarTrack || "#F5F5F5"};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbarThumb || "#2D3E50"};
    border-radius: 6px;
    border: 3px solid ${({ theme }) => theme.colors.scrollbarTrack || "#F5F5F5"};
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default EstilosGlobais;