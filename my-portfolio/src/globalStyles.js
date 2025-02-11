// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Orbitron', sans-serif;
  }
  body {
    background: linear-gradient(180deg, #02050a 0%, #0a1128 100%);
    color: #ffffff;
    overflow-x: hidden;
  }
  a {
    color: #0dcaf0;
    text-decoration: none;
    transition: 0.3s;
  }
  a:hover {
    color: #ff007f;
    text-shadow: 0 0 10px #ff007f;
  }
  
  /* Navbar Styles */
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .nav-links {
    display: flex;
    gap: 1.5rem;
  }
  .nav-links a {
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export default GlobalStyles;

