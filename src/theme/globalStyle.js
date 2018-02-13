import { injectGlobal } from 'styled-components'

export const theme = {
  black: '#272727',
  white: '#fafafa',
  dark: '#453463',
  light: '#755f9f',
  green: '#8ac3a9',
  yellow: '#fcdeb6',
  red: '#ff8463',
  pink: '#ff0198', // hollywood cerise
  mySinYellow: '#ffb617', // my sin
  purple: '#6e27c5', // purple heart
  orange: '#ff6600', // blaze orange
  blue: '#01c1d6', // robin's egg blue
  java: '#1cbcd2', // java
  sun: '#fab319', // sun
  affair: '#69479e', // affair
  flamingo: '#f16623', // flamingo
  minsk: '#2e2e86', // minsk
  pomegranate: '#ee362c', // pomegranate
  redViolet: '#eb238e', // red violet
  sushi: '#7cc142', // sushi
  bombay: '#adadaf', // Bombay
  jsYellow: '#f7e018' // JS yellow
}

const importUrl =
  'https://fonts.googleapis.com/css?family=Open+Sans|Roboto'

injectGlobal`
  @import url(${importUrl});

  body {
    margin: 0rem;
    padding: 0rem;
    font-family: 'Open Sans',
      Helvetica,
      Arial,
      sans-serif;
  }
`
