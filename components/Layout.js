import Head from 'next/head'
import NavBar from './NavBar'

const Layout = props => (
  <div>
    <Head>
      <title>c-counter</title>
    </Head>
    <NavBar />
    {props.children}
  </div>
)

export default Layout
