import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import {
  navLink,
  creditsLabel,
  credits
} from '../../components/layout.module.css'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className={credits}>
        <span className={creditsLabel}>
          Autor:{' '}
        </span>
        {data.mdx.frontmatter.author} | {data.mdx.frontmatter.date}
      </p>
      <GatsbyImage 
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p className={credits}>
        <span className={creditsLabel}>
          Foto por: {' '}
        </span>
        <a 
          href={data.mdx.frontmatter.hero_image_credit_link}
          className={navLink}
        >
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        author
        date
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 600
            )
          }
        }
      }
      body
    }
  }
`

export default BlogPost