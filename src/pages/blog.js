import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'

const BlogPage = ({ data }) => {
  return(
    <Layout pageTitle='Blog'>
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
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
        body
      }
    }
  }
`

export default BlogPage