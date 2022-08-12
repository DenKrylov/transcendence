import { createGlobalStyle } from "styled-components";

export interface Theme {
	backgroundNormal: string,
	backgroundAlternate: string,
	foregroundInactive: string,
	foregroundNormal: string,
	decorationFocus: string,
	decorationHover: string,
	foregroundLink: string,
	foregroundNegative: string,
	foregroundNeutral: string,
	foregroundPositive: string,
	foregroundVisited: string,
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    height: 100%;
    display: grid;
    grid-template-rows: 50px 1fr 30px;
  }
`