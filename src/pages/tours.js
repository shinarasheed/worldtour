import React from "react"
import Layout from "../components/Layout"
import MainHero from "../components/MainHero"
import { graphql } from "gatsby"

const tours = ({ data }) => {
  const backgroundimage = data.toursHero.childImageSharp.fluid
  return (
    <Layout>
      <MainHero img={backgroundimage}></MainHero>
    </Layout>
  )
}

export const query = graphql`
  query getToursHero {
    toursHero: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default tours
