import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Home" />
    <h3>
      <Link to="/build-time-data/">Build time Data Example</Link>
    </h3>
    <h3>
      <Link to="/run-time-data/">Run time Data Example</Link>
    </h3>
  </Layout>
)
