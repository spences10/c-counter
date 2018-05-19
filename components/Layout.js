import Head from 'next/head'
import NavBar from './NavBar'
import head from 'next/dist/lib/head'

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
