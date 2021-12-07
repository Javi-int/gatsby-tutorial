import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <h2>Bienveneu! N'marche pas sur les fleurs! {'>:('}</h2>
      <p>C'est fleurs {'--->'} 🌷🌷🌷</p>
      <StaticImage 
        alt='Para ver está imagen por favor, tírate por la ventana :)'
        src='../images/undertaker.jpg'
      />
    </Layout>
  )
}

export default IndexPage
