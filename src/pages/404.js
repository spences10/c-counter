import React from 'react'
import SEO from 'react-seo-component'
import Layout from '../components/layout'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export default () => {
  const { description, author } = useSiteMetadata()
  return (
    <Layout>
      <SEO
        title="404: Not found"
        description={description || 'nothin’'}
        // image={image}
        // pathname={siteUrl}
        // siteLanguage={siteLanguage}
        // siteLocale={siteLocale}
        twitterUsername={author}
      />
      <h1>NOT FOUND</h1>
      <p>`You just hit a route that doesn't exist... the sadness.`</p>
    </Layout>
  )
}
