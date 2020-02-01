import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  /* use for debugging only!! */
  /* * {
    outline: 1px solid red !important;
  } */
  html {
    min-height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    line-height: 1.3125;
    font-family: 'Pontano Sans'
  }
`
