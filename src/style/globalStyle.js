import { createGlobalStyle } from 'styled-components'

const fonts = () => {
  const list = [
    'Josefin+Slab:400,700|',
    'Maitree:400,700|',
    'Pontano+Sans',
  ]
  return list.join('')
}

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=${fonts()}');

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
