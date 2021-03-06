import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import {
  navLink,
  credits
} from '../components/layout.module.css'

const BlogPage = ({ data }) => {
  return(
    <Layout pageTitle='Blog'>
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <Link
                to={node.slug}
                className={navLink}
              >
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <p className={credits}>
                {node.frontmatter.date} | 
                <span> {node.frontmatter.author}</span>
              </p>
            </article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date
          author
        }
        id
        slug
      }
    }
  }
`

export default BlogPage