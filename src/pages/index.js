import { Link } from 'gatsby'
import React from 'react'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi API Days London!</h1>
    <p>Default Gatsby starter with data fetching examples.</p>
    <h3>
      <Link to="/build-time-data/">Build time Data Example</Link>
    </h3>
    <h3>
      <Link to="/run-time-data/">Run time Data Example</Link>
    </h3>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Now go build something great.</p>
  </Layout>
)
