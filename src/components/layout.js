import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { GlobalStyle } from '../style/globalStyle'
import Header from './header'

const Footer = styled.footer`
  margin-top: 3rem;
`

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
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
