import { Link } from 'gatsby'
import React from 'react'
import SEO from 'react-seo-component'
import { Layout } from '../components/layout'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export default () => {
  const { title, description, author } = useSiteMetadata()
  return (
    <Layout>
      <SEO
        title={title}
        description={description || `nothin’`}
        // image={image}
        // pathname={siteUrl}
        // siteLanguage={siteLanguage}
        // siteLocale={siteLocale}
        twitterUsername={author}
      />
      <h3>
        <Link to="/build-time-data/">Build time Data Example</Link>
      </h3>
      <h3>
        <Link to="/run-time-data/">Run time Data Example</Link>
      </h3>
    </Layout>
  )
}
