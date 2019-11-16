import PropTypes from 'prop-types'
import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { GlobalStyle } from '../style/globalStyle'
import Header from './header'

export const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <GlobalStyle />
      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
