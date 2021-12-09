import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  navMenu,
  navItem,
  navLink,
  navLinkActive,
  navBar,
  title,
  siteTitle
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav className={navBar}>
        <span className={siteTitle}>{data.site.siteMetadata.title}</span>
        <ul className={navMenu}>
          <li className={navItem}>
            <Link 
              to='/' 
              className={
                pageTitle === 'Home' ? navLinkActive : navLink
              }
            >
              Home
            </Link>
          </li>
          <li className={navItem}>
            <Link 
              to='/about' 
              className={
                pageTitle === 'Sobre Mí' ? navLinkActive : navLink
              }
            >
              Sobre Mí
            </Link>
          </li>
          <li className={navItem}>
            <Link 
              to='/blog' 
              className={
                pageTitle === 'Blog' ? navLinkActive : navLink
              }
            >
              Blog
            </Link>
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