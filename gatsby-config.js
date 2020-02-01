const siteMetadata = {
  title: `C-Counter`,
  description: `Crypto currency tickers`,
  author: `@spences10`,
  image: `/gatsby-icon.png`,
  favicon: `./static/gatsby-icon.png`,
  siteUrl: `https://c-counter.scottspence.me/`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: siteMetadata.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `josefin slab\:400,700`,
          `montserrat alternates\:400,700`,
          `pontano sans\:400,700`,
          `anonymous pro\:400,700`,
        ],
        display: 'swap',
      },
    },
  ],
}
