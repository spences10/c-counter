import Link from 'next/link'

const NavBar = () => (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="about">About</Link>
    </li>
  </ul>
)

export default NavBar
