import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navMenu,
  navItem,
  navLink,
  navBar,
  title
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={navBar}>
        <ul className={navMenu}>
          <li className={navItem}>
            <Link to='/' className={navLink}>Home</Link>
          </li>
          <li className={navItem}>
            <Link to='/about' className={navLink}>Sobre Mí</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={title}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout