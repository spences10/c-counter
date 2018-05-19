import Link from 'next/link'

const NavBar = () => (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="page2">Page 2</Link>
    </li>
  </ul>
)

export default NavBar
