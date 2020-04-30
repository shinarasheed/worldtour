import React from "react"
import Layout from "../components/Layout"
import MainHero from "../components/MainHero"
import { graphql } from "gatsby"

const blog = ({ data }) => {
  const backgroundimage = data.blogHero.childImageSharp.fluid
  return (
    <Layout>
      <MainHero img={backgroundimage}></MainHero>
    </Layout>
  )
}

export const query = graphql`
  query getBlogHero {
    blogHero: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default blog
